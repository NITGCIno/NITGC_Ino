/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        ons.ready(function() {
            var pullHook = document.getElementById('pull-hook');

            pullHook.addEventListener('changestate', function(event) {
                var message = '';

                switch (event.state) {
                    case 'initial':
                        message = 'Pull to refresh';
                        break;
                    case 'preaction':
                        message = 'Release';
                        break;
                    case 'action':
                        message = 'Loading...';
                        break;
                }

            pullHook.innerHTML = message;
            });

            pullHook.onAction = function(done) {
                setTimeout(done, 1000);
            };
        });

