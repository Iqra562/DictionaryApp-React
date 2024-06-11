import React, { useContext } from "react";
import "./Header.css";
import { TextField } from "@mui/material";
import ApiContext from "../../Context/ApiContext";
import AudioPlayer from "../Definition/AudioPlayer";
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import SearchIcon from '@mui/icons-material/Search';
function Header({darkMode}) {
  const { data, keyword, setKeyword, error ,inputError} = useContext(ApiContext);
  // console.log(inputError,"keyword")

  return (
    <div className="header">
      <div className="inputs">
        <TextField
          id="standard-basic"
          label="Enter Keyword*"
          style={{ width: "100%" }}
          variant="standard"
          className="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="title-wrapper">
        {error ? (
          <div className="not-found">

            
              <p>
                word not found!

                </p>

          </div>
        ) : keyword  == "" ?(
          <div className="search-error">
            <div>
            <p>"Search a word for translation"</p>
            <div>
            <SearchIcon style={{fontSize:"130px"}}/>

            </div>
            </div>

          </div>
        ): (  
          <div className="title-side">
            <div>
            <span className="title" style={{color:darkMode? "white":"black" }} >
  {keyword}
</span>
              <div>
                {data && data[0] && data[0].phonetics && (
                  <div className="phonetics">
                    {data.length > 0 &&
                      ((data[0].phonetics[0] && data[0].phonetics[0].text) ||
                        (data[0].phonetics[1] && data[0].phonetics[1].text) ||
                        `/${keyword}/`)}
                  </div>
                )}
              </div>
            </div>
            <div>
              <AudioPlayer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
