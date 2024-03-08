var availableModels = ['BMW', 'TOYOTA', 'HONDA', 'FERRARI', 'ASTON MARTIN'];

var para = '';

for(i=0; i<availableModels.length; i++){
   para += availableModels[i] + '<br>'; 
}
document.getElementById('para').innerHTML=para;