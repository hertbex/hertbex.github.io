let store = {
    questions:[
        {
            questionNumber: 'Question 1',
            question: 'some question1',
            answers:[
                {
                    key: 'some ans1',
                    value: 'yes',
                },
                {
                    key: 'some ans2',
                    value: 'no',
                },
                {
                    key: 'some ans3',
                    value: 'no',
                },
            ],
            count: 3,
            submit: 'ПОДТВЕРДИТЬ',
            type: 'radio'
        },
        {
            questionNumber: 'Question 2',
            question: 'some question2',
            answers: [
                {
                    key: 'some ans1',
                    value: 'yes',
                },
                {
                    key: 'some ans2',
                    value: 'no',
                },
                {
                    key: 'some ans3',
                    value: 'no',
                },
                {
                    key: 'some ans4',
                    value: 'yes',
                },
            ],

            count: 4,
            submit: 'ПОДТВЕРДИТЬ',
            type: 'checkbox'
        },
        {
            questionNumber: 'Question 1',
            question: 'some question1',
            answers: [
                {   
                    key: 'some ans1',
                    value: 'yes',
                },
                {
                    key: 'some ans2',
                    value: 'no',
                },
                {
                    key: 'some ans3',
                    value: 'no',
                },
            ],
            count: 3,
            submit: 'ПОДТВЕРДИТЬ',
            type: 'radio'
        },
    ]
}

export default store