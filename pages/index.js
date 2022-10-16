import Head from 'next/head'
import { useEffect, useState } from 'react'
import CubeHeures from '../components/CubeHeures.js'
import CubeSecondes from '../components/CubeSecondes.js'
import CubeMinutes from '../components/CubeMinutes.js'
import styles from '../styles/Home.module.scss'
import boutons from '../styles/Boutons.module.css'


export default function Home() {

  const [secondes, setSecondes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [heures, setHeures] = useState(0);
  const [activ, setActive] = useState(false);
  const [Bdemarrer, setActiveDemarrer] = useState(true);
  const [BStop, setActiveStop] = useState(false);
  const [Braz, setActiveRaz] = useState(false);


  useEffect( ()=>{
    if (activ) {
      setTimeout(()=>{
        if (secondes < 59) {
          setSecondes(secondes+1)          
        }
        if (secondes == 59) {
          setSecondes(s => 0)
          setMinutes(m => m+1)
        }
        if (minutes == 59 && secondes == 59) {
          setMinutes(m => 0)
          setHeures(h => h+1)
        }
      }, 1000) 
    }
  })

  function demarrerTemps(){
    if (Bdemarrer) {
      setActive(true);
      setActiveDemarrer(false);
      setActiveStop(true); 
    }
  }
  function stopTemps(){
    if (BStop) {
      setActive(false);
      setActiveStop(false);
      setActiveDemarrer(true);
      setActiveRaz(true);  
    }
  }
  function reinitialiserTemps(){
    if (Braz) {
      setHeures(h=>0);
      setMinutes(m=>0);
      setSecondes(s=>0);
      setActive(false);
      setActiveDemarrer(true);
      setActiveRaz(false);
      setActiveStop(false);  
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={boutons.container}>
          <button onClick={demarrerTemps} className={Bdemarrer?boutons.actif:boutons.nonActif}>Demarer</button>
          <button onClick={stopTemps} className={BStop?boutons.actif:boutons.nonActif}>Stop</button>
          <button onClick={reinitialiserTemps} className={Braz?boutons.actif:boutons.nonActif}>RAZ</button>
        </div>
        <div className={styles.chrono}>
          <CubeHeures heures={heures} minutes={minutes} secondes={secondes}/>
          <p className={styles.separateur}>:</p>
          <CubeMinutes minutes={minutes} secondes={secondes}/>
          <p className={styles.separateur}>:</p>
          <CubeSecondes secondes={secondes} active={activ}/>
        </div>
      </main>
    </div>
  )
}
