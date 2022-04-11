import React from 'react';

const Question = () => {
    return (
        <div class="question">
        <div class="qtitle">
          <span class="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <div class="answers">
          <!-- Option 1 -->
          <label class="answer" for="option1"> A New Hope 1 </label>

          <!-- Option 2 -->
          <label class="answer" for="option2"> A New Hope 1 </label>

          <!-- Option 3 -->
          <label class="answer" for="option3"> A New Hope 1 </label>

          <!-- Option 4 -->
          <label class="answer wrong" for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

          <!-- Option 5 -->
          <label class="answer" for="option5"> A New Hope 1 </label>

          <!-- Option 6 -->
          <label class="answer" for="option6"> A New Hope 1 </label>

          <!-- Option 7 -->
          <label class="answer correct" for="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

          <!-- Option 8-->
          <label class="answer" for="option8"> A New Hope 1 </label>

          <!-- Option 9 -->
          <label class="answer" for="option9"> A New Hope 1 </label>

          <!-- Option 10 -->
          <label class="answer" for="option10"> A New Hope 1 </label>
        </div>
      </div>
    );
};

export default Question;