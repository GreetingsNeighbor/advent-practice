import React, { useEffect } from 'react';

const ProblemHook = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [fileData, setFileData] = React.useState(null);
    const [answer, setAnswer] = React.useState(null);

    const {title, description, solver} = props;
    const fileSelection = async (e) => {
        const fileName = e.target.files[0].name;
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
            solver(fileData, setAnswer);
        }
    }, [fileData, solver]);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p> {!!answer ? answer : 'No answer yet'}</p>
     

        <input type='file' name='file' onChange={fileSelection}/>
    </div>
  );
}