import React, { useContext } from "react";
import "./Definition.css"
import ApiContext from "../../Context/ApiContext";

function Definition({darkMode}){

    const {data,error,keyword} = useContext(ApiContext);
return(  
     <div className="main">
        

{ !error  && keyword  != ""   &&
  data.length > 0 && (
    <div className="meanings">{
    data.map((item) => (
        item.meanings.map((meaning) => (
            <div className="translator-cover">
            <div key={meaning.partOfSpeech} className="speech-name">
                <p>{meaning.partOfSpeech}</p>
                <hr  style={{backgroundColor: darkMode?"#2c2b2b":"#f3f2f2"}}/>
                </div>
                <div className="speech-defintion"> 
                <p>Definition</p>
                {meaning.definitions.map((definitionObj, index) => (
                    <div key={index}>
                        {
                            <ul >
                                <li> {definitionObj.definition}</li>
                              { definitionObj.example &&  <span>{`"${definitionObj.example}"`}</span>}
                            </ul>
                        }
                    </div> 
                ))}
                </div>
          {   meaning.synonyms.length >0 &&    <div className="synonyms">
    <p>Synonyms</p>
    <span>{meaning.synonyms.join(', ')
}</span>
</div>}
{
meaning.antonyms.length > 0 && 

<div className="antonyms">
<p>Antonyms</p>
    <span>{meaning.antonyms.join(', ')
}</span>
</div> 
}
            </div>

        ))
    ))
}
    </div>
)


}



      

</div>
)
}
export default Definition;