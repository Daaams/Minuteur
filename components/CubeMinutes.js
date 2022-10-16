import styles from '../styles/Home.module.scss'

const mystyle = {
    color: "black",
    fontSize : "75px",
    fontFamily: "Arial"
  };

  function Text({variable}){
    return <p style={mystyle}>{variable}</p>
  }

function Cube({minutes, secondes}) {
    return (
        <div className={styles.containerFace}>
          <div className={(secondes === 59) ? styles.forme : styles.forme2}>
            <div className={styles.faceFront}>
              <Text variable={minutes}/>
            </div>
            <div className={styles.faceBack}>
              <Text variable={minutes}/>
            </div>
            <div className={styles.faceTop}>
              <Text variable={minutes}/>
            </div>
            <div className={styles.faceBottom}>
              <Text variable={minutes}/>
            </div>
          </div>
        </div>
    );
}

export default Cube;