var questions = {
  "text": "What's your favorite pet?",
  "choices": [{
      "label": "Dog",
      "path": 1,
      "question": {
        "text": "What breed of dog?", //1 a
        "choices": [{
            "label": "Golden Retriever",
            "path": 11,
            "question": {
              "text": "What color Golden Retriever?", //1 a
              "choices": [{
                  "label": "Golden",
                  "path": 111
                },
                {
                  "label": "Sandy",
                  "path": 112
                },
                {
                  "label": "Blonde",
                  "path": 113
                },
              ]
            }
          },
          {
            "label": "Labrador",
            "path": 12,
            "question": {
              "text": "What color Labrador?", //1 a
              "choices": [{
                  "label": "Black",
                  "path": 121
                },
                {
                  "label": "Chocolate",
                  "path": 122
                },
                {
                  "label": "Tan",
                  "path": 123
                },
              ]
            }
          },
          {
            "label": "Poodle",
            "path": 13,
            "question": {
              "text": "What color Poodle?", //1 a
              "choices": [{
                  "label": "Ugly",
                  "path": 131
                },
                {
                  "label": "Uglier",
                  "path": 132
                },
                {
                  "label": "Ugliest",
                  "path": 133
                },
              ]
            }
          },
        ]
      }
    },
    {
      "label": "Cat",
      "path": 2,
      "question": {
        "text": "What breed of cat?", //1 b
        "choices": [{
            "label": "Siamese",
            "path": 21,
            "question": {
              "text": "What color Siamese?", //1 a
              "choices": [{
                  "label": "white",
                  "path": 211
                },
                {
                  "label": "orange",
                  "path": 212
                },
                {
                  "label": "red",
                  "path": 213
                },
              ]
            }
          },
          {
            "label": "Persian",
            "path": 22,
            "question": {
              "text": "What color Persian?", //1 a
              "choices": [{
                  "label": "lavendar",
                  "path": 221
                },
                {
                  "label": "green",
                  "path": 222
                },
                {
                  "label": "black",
                  "path": 223
                },
              ]
            }
          },
          {
            "label": "Tortie",
            "path": 23,
            "question": {
              "text": "What color Tortie?", //1 c
              "choices": [{
                  "label": "violet",
                  "path": 231
                },
                {
                  "label": "orange",
                  "path": 232
                },
                {
                  "label": "Pink",
                  "path": 233
                },
              ]
            }
          },
        ]
      }
    },
    {
      "label": "Bird",
      "path": 3,
      "question": {
        "text": "What breed of bird?", //1 a
        "choices": [{
            "label": "Bluebird",
            "path": 31,
            "question": {
              "text": "What breed of Bluebird?", //1 a
              "choices": [{
                  "label": "Blue",
                  "path": 311
                },
                {
                  "label": "grey",
                  "path": 312
                },
                {
                  "label": "yellow",
                  "path": 313
                },
              ]
            }
          },
          {
            "label": "Robin",
            "path": 32,
            "question": {
              "text": "What breed of Robin?", //1 a
              "choices": [{
                  "label": "Black",
                  "path": 321
                },
                {
                  "label": "White",
                  "path": 322
                },
                {
                  "label": "Red",
                  "path": 323
                },
              ]
            }
          },
          {
            "label": "Parrot",
            "path": 33,
            "question": {
              "text": "What breed of Parrot?", //1 a
              "choices": [{
                  "label": "Multi Color",
                  "path": 331
                },
                {
                  "label": "Red",
                  "path": 332
                },
                {
                  "label": "Green",
                  "path": 333
                },
              ]
            }
          },
        ]
      }
    },
  ]
};

var quizComplete = false,
  answers = [],
  currentObj = questions;

$(document).ready(function() {

  updateQuestion();

  if (!quizComplete) {

    $('.choices').on('click', '.choice', function() {

      value = $(this).attr('value');
      answers.push($(this).html());
      //currentQuestion++;

      if (currentObj.choices[value].question) {
        currentObj = currentObj.choices[value].question;
      } else {
        quizComplete = true;
        alert("quizComplete answers : " + answers);
        answers = [];
        currentObj = questions;
      }
      updateQuestion();

    });

  }
});

function updateQuestion() {

  var question = currentObj.text;
  var questionText = $(document).find(".container > .question");
  var choiceList = $(document).find(".container > .choices");
  var numChoices = currentObj.choices.length;

  // Set question text
  $(questionText).text(question);

  // Clear current choices and update with new ones
  $(".choice").remove();

  var choice, path;
  for (i = 0; i < numChoices; i++) {
    choice = currentObj.choices[i].label;
    path = currentObj.choices[i].path;
    $('<div class="choice" value=' + i + '>' + choice + '</div>').appendTo(choiceList);
  }
}
