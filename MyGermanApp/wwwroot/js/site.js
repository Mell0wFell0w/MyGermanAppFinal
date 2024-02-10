// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = $('#hoursInput').val();
        var level = $('#proficiencyLevel').val();
        var ratePerHour = 50; // Example rate per hour
        var hoursPerLevel = {
            A1: 100,
            A2: 200,
            B1: 300,
            B2: 400,
            C1: 500,
            C2: 600
        };
        var resultText = '';

        // When user inputs hours to find out proficiency level and cost
        if (hours) {
            var proficiencyLevel = '';
            $.each(hoursPerLevel, function (key, value) {
                if (hours <= value) {
                    proficiencyLevel = key;
                    return false; // Break out of the loop once the first matching level is found
                }
            });

            var cost = hours * ratePerHour;
            resultText = proficiencyLevel ?
                `For ${hours} hours of learning, Estimated Proficiency Level: ${proficiencyLevel}, Estimated Cost: $${cost}` :
                `For ${hours} hours, you exceed the estimated hours for all levels, Estimated Cost: $${cost}`;
        }

        // When user selects a proficiency level to find out estimated hours and cost
        else if (level && level !== '0') {
            var estimatedHours = hoursPerLevel[level];
            var estimatedCost = estimatedHours * ratePerHour;
            resultText = `For Proficiency Level ${level}: Estimated Hours: ${estimatedHours}, Estimated Cost: $${estimatedCost}`;
        } else {
            resultText = 'Please enter hours or select a language proficiency level.';
        }

        $('#result').html(resultText);
    });
});

