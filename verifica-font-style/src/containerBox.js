import React, {useState} from 'react';
import ContainerStyle from './contentBoxStyle/contentStyle'

const ContainerBox = () => {

    const [fontText, setFontText] = useState({
        fontName: 'Nome da Fonte',
        text: 'Texto da Fonte Selecionada'
    })


    return (
        <div>
            <ContainerStyle fontName={fontText.fontName}  text={fontText.text} />
            <ContainerStyle fontName={fontText.fontName}  text={fontText.text} />
            <ContainerStyle fontName={fontText.fontName}  text={fontText.text} />
        </div>
    );
}

export default ContainerBox;