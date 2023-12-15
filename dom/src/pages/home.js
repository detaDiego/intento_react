import { useEffect } from "react"
import { useSessionRewind } from "../context/sessionRewind";

export function Home(){
    const username="diego"
    const { scripts, setScripts } = useSessionRewind();
    useEffect(()=>{
        if (scripts[username]){
            if (scripts[username] instanceof HTMLScriptElement) {
                console.log('It is a script element.');
              } else {
                console.log('It is not a script element.');
              }
              scripts[username].text="console.log('hola')"
              document.body.appendChild(scripts[username]);
        }
        scripts[username] = document.createElement('script');
        scripts[username].text="console.log('xao')"
        document.body.appendChild(scripts[username]);

        
    },[scripts])
    return(
        <>
        <div>
        <h1><a href="/page1">Home</a></h1>
        </div>
        </>
    )
}
