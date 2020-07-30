const socket = io.connect('http://localhost:4000');

const name = document.getElementById('name');
const message = document.getElementById('message');
const output = document.getElementById('output');
const btn = document.getElementById('send-button');
const typing = document.getElementById('typing-message');


btn.addEventListener('click',()=>{
    socket.emit('chat',{
        name: name.value,
        message: message.value,
    });
});

message.addEventListener('keypress',()=>{
    socket.emit('typing',name.value);
})

socket.on('chat',(data)=>{
    typing.textContent='';
    const text = document.createElement('p');
    text.textContent = data.message;

    output.appendChild(text);
});

socket.on('typing',(data)=>{
    typing.textContent = `${data} is typing...`
})