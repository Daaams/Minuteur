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
            <div className={(minutes === 59 && secondes === 59) ? styles.forme : styles.forme2}>
                <div className={styles.faceFront}>
                    <Text variable={heures}/>
                </div>
                <div className={styles.faceBack}>
                    <Text variable={heures}/>
                </div>
                <div className={styles.faceTop}>
                    <Text variable={heures}/>
                </div>
                <div className={styles.faceBottom}>
                    <Text variable={heures}/>
                </div>
            </div>
      </div>
    );
}

export default Cube;