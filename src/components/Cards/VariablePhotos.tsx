import styles from './styles.module.css';
import DoomWall from '../../assets/TKG/DoomWall.png';
export const VariablePhotos = () => {
  return (
    <div className={styles.container0}>
      <div className="img0" style={{ backgroundImage: `url(${DoomWall})` }} />
    </div>
  );
};
export default VariablePhotos;
