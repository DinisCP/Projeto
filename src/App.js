import './App.css';
import Graph1 from './components/Graph1';

import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                Importar ficheiros
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />

        </div>

       
    );
}

export default App;
