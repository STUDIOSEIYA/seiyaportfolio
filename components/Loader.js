import { useProgress } from '@react-three/drei'
import styles from "../styles/Loader.module.css";

const Loader = () => {

    const { active, progress } = useProgress()
 
  return active ? (
    <div class="loader">
      <span>
        {Math.floor(progress)}%
      </span>
    </div>
  ) : null

  };
  
  export default Loader;