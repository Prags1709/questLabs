import React, { useState } from "react";
import Button from '@mui/material/Button';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const SubmitForm = () => {
    const [feel, setFeel] = useState("");
    const [job, setJob] = useState("");
    const [issue, setIssue] = useState("");
    const [result, setResult] = useState("");
    const [render, setRender] = useState(false)
    const [open, setOpen] = useState(false);

    const handelFeel = (e) => {
        setFeel(e.target.value)
    };

    const handelJob = (e) => {
        setJob(e.target.value)
    };

    const handelIssue = (e) => {
        setIssue(e.target.value)
    };

    const handelSubmit = async () => {
        if(feel === "" || job === "" || issue === ""){
            alert("Please fill all the entity");
        }else{
            setOpen(true);

            let url = "http://localhost:4500/data";

            axios.post(url, {
                usecase: "GPT_MEDITATION_CREATOR",
                userInput: `feeling ${feel} right now, they currently are ${job} and facing ${issue} issues today`
            })
            .then(function (response) {
                setOpen(false);
                setResult(response.data.generatedText)
                setRender(true);
            })
            .catch(function (error) {
                setOpen(false);
                alert("something went wrong")
                console.log(error);
            });
        }
    };

    return (
        <div>
            <form >
                <input onChange={handelFeel} placeholder="How are you feeling" type="text" /><br />
                <input onChange={handelJob} placeholder="What do you do" type="text" /><br />
                <input onChange={handelIssue} placeholder="*Enter your issues" type="text" /><br />
                <Button onClick={handelSubmit} variant="contained" style={{
                    marginTop: "10px",
                    width: "60%"
                }}>Get Started</Button>
            </form>
            {render && <div className="solution">
                <span>Solution </span>
                <EmojiObjectsIcon style={{
                    color: "rgb(216, 216, 16)",
                    marginBottom: "-4px"
                }} />
                <h4>{result}</h4>
            </div>}
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
            <p>I use <a href="https://openai.com/policies/api-data-usage-policies">OpenAI</a>to generate your meditation.</p>
            <p>Made with ❤️ by Prags</p>
        </div>
    )
}