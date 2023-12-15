import { useSessionRewind } from "../context/sessionRewind";
import { useEffect } from "react"
export function Page1(){
    const username="javier"
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
            <h1><a href="/">Page1</a></h1>
        </div>
        </>
    )
}
