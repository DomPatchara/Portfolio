import  { useContext, useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { ActiveContext } from '../context/active-section';


const useSectionInview = (sectionName) => {

    const { isActive, setIsActive, isClick, setIsClick} = useContext(ActiveContext);

    const threshold = window.innerWidth <= 768 ? 0.4 : 0.75;
    const { ref, inView } = useInView({threshold}); // scroll ถึง 40% or 75% ของ Section นั้นๆ ----> setActive Nav links นั้นๆ (bgเปลี่ยน)


    useEffect(()=>{

        if(isClick) {
            return;
        }

        if (inView && !isClick) {
            setIsActive(sectionName); 
        }

    },[inView, setIsActive, sectionName])


    // resetIsClick = false
    useEffect(() => {

        const resetIsClick = () => {
            if (isClick) {
                
                // set delay 500 then setIsClick = False
                setTimeout(() => {
                    setIsClick(false);
                }, 500); 
            }
        };

        window.addEventListener('scroll', resetIsClick);

        // clear 
        return () => {
            window.removeEventListener('scroll', resetIsClick);
        };
    }, [isClick, setIsClick]);

  return {
    ref,
  };
}

export default useSectionInview