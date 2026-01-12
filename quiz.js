// Mathematics ///
function checkMathAnswers(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    let mathScore = 0;
    const mathAnswers = {
        math1: 'b',  // 5 × (3 + 2) = 25
        math2: 'b',  // √16 = 4
        math3: 'a',  // 10% of 50 = 5
        math4: 'b',  // 2³ = 8
        math5: 'b',  // Perimeter of square with side 4 = 16
        math6: 'b',  // 3/4 = 0.75
        math7: 'b',  // π ≈ 3.14
        math8: 'a',  // Area of triangle = (6 × 4) / 2 = 12
        math9: 'b',  // 7 - (-3) = 10
        math10: 'b', // 5! = 120
        math11: 'b', // Slope of y = 2x + 3 is 2
        math12: 'b'  // Sum of angles in a triangle = 180°
    };
    let resultHTML = `<h3>Your Results:</h3>`;
    for (let i = 1; i <= 12; i++) {
        const userAnswer = document.querySelector(`input[name="math${i}"]:checked`);
        const correctAnswer = mathAnswers[`math${i}`];
        if (userAnswer && userAnswer.value === correctAnswers) {
            mathScore++;
            resultHTML += `<p>Question ${i}: Correct!</p>`;
        }else {
            resultHTML += `<p>Question ${i}: Incorrect. The correct answer is <strong>${correctAnswer}</strong>.</p>`;
        }
    }
    resultHTML += `<h3>Your Score: ${mathScore} out of 12</h3>`;
    document.getElementById('math-result').innerHTML = resultHTML;
}

// astrology //
function checkAstroAnswers(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    let astroScore = 0;
    const astroAnswers = {
        astro1: 'b',  // Aries (Fire)
        astro2: 'b',  // Scorpio (Mars)
        astro3: 'b',  // Leo (natural leader)
        astro4: 'b',  // Gemini (Pearl)
        astro5: 'a',  // Taurus (Earth)
        astro6: 'b',  // Libra (Venus)
        astro7: 'b',  // May 21 - June 20 (Gemini)
        astro8: 'b',  // Pisces (Water)
        astro9: 'b',  // Mercury (communication)
        astro10: 'a', // Virgo (detail-oriented)
        astro11: 'a', // Dec 22 - Jan 19 (Capricorn)
        astro12: 'a'  // Sagittarius (Jupiter)
    };
    let resultHTML = `<h3>Your Results:</h3>`;
    for (let i = 1; i <= 12; i++) {
        const userAnswer = document.querySelector(`input[name="astro${i}"]:checked`);
        const correctAnswer = astroAnswers[`astro${i}`];
        if (userAnswer && userAnswer.value === correctAnswer) {
            astroScore++;
            resultHTML += `<p>Question ${i}: Correct!</p>`;
        } else {
            resultHTML += `<p>Question ${i}: Incorrect. The correct answer is <strong>${correctAnswer}</strong>.</p>`;
        }
    }
    resultHTML += `<h3>Your Score: ${astroScore} out of 12</h3>`;
    document.getElementById('astro-result').innerHTML = resultHTML;
}


//computer programming//
function checkCpAnswers(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    let progScore = 0;
    const progAnswers = {
        prog1: 'a',  // print("Hello, World!")
        prog2: 'b',  // Cascading Style Sheets
        prog3: 'a',  // var x = 5;
        prog4: 'a',  // len() returns length
        prog5: 'b',  // <a> for hyperlink
        prog6: 'a',  // // for single-line comment
        prog7: 'b',  // if executes based on condition
        prog8: 'b',  // #header for ID
        prog9: 'b',  // 2 + "2" = "22"
        prog10: 'a', // for i in range(5):
        prog11: 'a', // HyperText Markup Language
        prog12: 'a'  // function myFunction() {}
    };
    let resultHTML = `<h3>Your Results:</h3>`;
    for (let i = 1; i <= 12; i++) {
        const userAnswer = document.querySelector(`input[name="prog${i}"]:checked`);
        const correctAnswer = progAnswers[`prog${i}`];
        if (userAnswer && userAnswer.value === correctAnswer) {
            progScore++;
            resultHTML += `<p>Question ${i}: Correct!</p>`;
        } else {
            resultHTML += `<p>Question ${i}: Incorrect. The correct answer is <strong>${correctAnswer}</strong>.</p>`;
        }
    }
    resultHTML += `<h3>Your Score: ${progScore} out of 12</h3>`;
    document.getElementById('prog-result').innerHTML = resultHTML;
}

// literature //
function checkLitAnswers(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    let litScore = 0;
    const litAnswers = {
        lit1: 'b',  // Jane Austen
        lit2: 'b',  // Hamlet
        lit3: 'b',  // Homer
        lit4: 'b',  // Moby Dick
        lit5: 'a',  // William Shakespeare
        lit6: 'b',  // Nick Carraway
        lit7: 'b',  // George Orwell
        lit8: 'b',  // Harry Potter and the Philosopher's Stone
        lit9: 'a',  // Edgar Allan Poe
        lit10: 'a', // Atticus Finch
        lit11: 'b', // Charlotte Brontë
        lit12: 'b'  // Frodo Baggins
    };
    let resultHTML = `<h3>Your Results:</h3>`;
    for (let i = 1; i <= 12; i++) {
        const userAnswer = document.querySelector(`input[name="lit${i}"]:checked`);
        const correctAnswer = litAnswers[`lit${i}`];
        if (userAnswer && userAnswer.value === correctAnswer) {
            litScore++;
            resultHTML += `<p>Question ${i}: Correct!</p>`;
        } else {
            resultHTML += `<p>Question ${i}: Incorrect. The correct answer is <strong>${correctAnswer}</strong>.</p>`;
        }
    }
    resultHTML += `<h3>Your Score: ${litScore} out of 12</h3>`;
    document.getElementById('lit-result').innerHTML = `You scored ${litScore} out of 12!`;
}