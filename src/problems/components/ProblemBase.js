import React, { useEffect } from 'react';

const ProblemBase = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [fileData, setFileData] = React.useState(null);
    const [answerOne, setAnswerOne] = React.useState(null);
    const [answerTwo, setAnswerTwo] = React.useState(null);

    const {title, description, solver} = props;
    const fileSelection = async (e) => {
        const fileName = e.target.files[0];
        if(!!fileName) {
            const file = e.target.files[0];
            const reader = new FileReader();
           
            reader.onload = async(e) => {
                const fileContent = await reader.result;
                const lines = fileContent.split('\n');
                setFileData(lines);
               
            };
            reader.readAsText(file);

            
       
        }else {
            alert('Please select a file');
            setFileData(null);
        }
    }

    useEffect(() => {
        if(!!fileData) {
           const {answer1, answer2}=  solver(fileData);
           setAnswerOne(answer1);
           setAnswerTwo(answer2);
        }
    }, [fileData, solver]);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p> {!!answerOne ? answerOne : 'No answer one yet'}</p>
      <p> {!!answerTwo ? answerTwo : 'No answer two yet'}</p>
     

        <input type='file' name='file' onChange={fileSelection}/>
    </div>
  );
}

export default ProblemBase;