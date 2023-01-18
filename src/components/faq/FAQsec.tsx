import Question from './faq';

function FAQsec() {
    return (

        <div className="py-16 mx-auto w-full px-4 max-w-4xl">
            <h3 className="mb-12 text-3xl text-center leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Frequently Asked Questions
            </h3>
            <hr className="border-b border-gray-100" />
            <Question
                question="How are you?"
                answer="Fine!!"
            />
            <hr className="border-b border-gray-100" />
            <Question
                question="How are you?"
                answer="Fine!!"
            />
        </div>

    )
}
export default FAQsec;