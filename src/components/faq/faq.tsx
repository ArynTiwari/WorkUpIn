import { useState } from 'react';
import { FaFontAwesome } from 'react-icons/fa';
interface IProps{
    question:string,
    answer:string
}
function Question( {question,answer}:IProps ) {
    const [expand, setExpand] = useState(false);
    const expandClass = expand ? 'dispaly' : 'hidden';
    const ansClass = `${expandClass} p-4`
    return (
        <>
            <div className="shadow rounded border border-gray-100 border-t-0" >
                <div className="p-4 text-xl relative font-medium">
                    <div className="w-5/6">
                        {question}
                    </div>
                    <button
                        aria-label="question-expander"
                        className="text-xl absolute top-0 right-0 p-4 fous:outline-none"
                        onClick={() => setExpand((prev)=>!prev)}
                    >
                        {expand ?
                            <FaFontAwesome className="w-5" />
                            :
                            <FaFontAwesome className="w-5" />
                        } </button>
                </div>
                <div className={ansClass}>
                    {answer}
                </div>
            </div>
            
        </>
    )
}
export default Question;