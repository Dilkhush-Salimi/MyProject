  const questions=[
            {
                question:'which is the largest animal in the world ?',
                answers:[
                    {text:'shark', correct:false},
                    {text:'blue whale', correct:true},
                    {text:'elepgant', correct:false},
                    {text:'tiger', correct:false},
                ]
            },
            {
                question:'which is the largest amount in the world ?',
                answers:[
                    {text:'toor', correct:false},
                    {text:'jabal', correct:false},
                    {text:'himaliya', correct:true},
                    {text:'kosar', correct:false},
                ]
            },
            {
                question:'which is the largest desert in the world ?',
                answers:[
                    {text:'gobi', correct:false},
                    {text:'kalhari', correct:false},
                    {text:'sahara', correct:false},
                    {text:'antarctica', correct:true},
                ]
            },
            {
                question:'which is the largest country in the world ?',
                answers:[
                    {text:'india', correct:false},
                    {text:'chaina', correct:true},
                    {text:'nepal', correct:false},
                    {text:'america', correct:false},
                ]
            }
        ];

        const questionElement=document.getElementById('question')
        const answerBtn=document.getElementById('answer_buttons')
        const nextBtn=document.getElementById('next_button')

        let currQueIndex=0;
        let score=0;
        function startQuiz(){
            currQueIndex=0;
            score=0;
            nextBtn.innerHTML='Next';
            ShowQuestion()
        }

        function ShowQuestion(){
            resetState()
            let currQuestion=questions[currQueIndex];
            let questionNo=currQueIndex+1;
            questionElement.innerHTML=questionNo+'. '+currQuestion.question;

            currQuestion.answers.forEach(answer=>{
                const button=document.createElement('button')

                // 
                button.innerHTML=answer.text;
                button.classList.add('btn');
                answerBtn.appendChild(button)
                if (answer.correct) {
                    button.dataset.correct=answer.correct;}
                button.addEventListener('click', selectAnswer)

            })
        };

        // to remove previous options 
        function resetState(){
            nextBtn.style.display='none';
            while(answerBtn.firstChild){
                answerBtn.removeChild(answerBtn.firstChild)
            }
        }
        function selectAnswer(e){
            const selectBtn=e.target;
            const isCorrect=selectBtn.dataset.correct==='true';
            if (isCorrect) {selectBtn.classList.add('correct');
            score++;
                
            }else{selectBtn.classList.add('incorrect')}
            Array.from(answerBtn.children).forEach(button=>{
                if (button.dataset.correct==='true') {
                    button.classList.add('correct')
                    
                }
                button.disabled=true;
            })
            nextBtn.style.display='block';
        }

        function showScore(){
            resetState();
            questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
            nextBtn.innerHTML='play again <br> <br><h6> <span>( by</span> aakil )</h6>';
            nextBtn.style.display='block'
        }
        function handleNextBtn(){
            currQueIndex++;
            if (currQueIndex <questions.length) {ShowQuestion();
                
            }else{
                showScore()
            }
        }
        nextBtn.addEventListener('click',()=>{
            if (currQueIndex <questions.length) {handleNextBtn();
                
            }else{
                startQuiz()
            }
        } )
        startQuiz()

