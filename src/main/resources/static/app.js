// app.js
var Stomp = require('stompjs');
var $ = require('jquery');
var SockJS = require("sockjs-client");

var stompClient = null;

function connect() {
    var socket = new SockJS('/rt');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function showGreeting(message) {
    $("#greetings").html('<tr><td><h1 style="color: blueviolet">' + message + "</h1></td></tr>");
}

connect();
