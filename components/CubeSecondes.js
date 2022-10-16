import styles from '../styles/Home.module.scss'

const mystyle = {
    color: "black",
    fontSize : "75px",
    fontFamily: "Arial"
  };

  function Text({variable}){
    return <p style={mystyle}>{variable}</p>
  }

function Cube({heures, minutes, secondes}) {
    return (
        <div className={styles.containerFace}>
          <div className={styles.forme}>
            <div className={styles.faceFront}>
              <Text variable={secondes}/>
            </div>
            <div className={styles.faceBack}>
              <Text variable={secondes}/>
            </div>
            <div className={styles.faceTop}>
              <Text variable={secondes}/>
            </div>
            <div className={styles.faceBottom}>
              <Text variable={secondes}/>
            </div>
          </div>
        </div>
    );
}

export default Cube;