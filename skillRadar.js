const canvas = document.getElementById('skillsRadar');
const ctx = canvas.getContext('2d');

const skills = [
  { name: "C#/.NET", level: 90 },
  { name: "Flutter", level: 75 },
  { name: "SQL Server", level: 85 },
  { name: "Business Analytics", level: 70 },
  { name: "IoT Projects", level: 65 }
];

const radius = 100;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const angleStep = (Math.PI * 2) / skills.length;

function drawRadar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw concentric circles
    ctx.strokeStyle = "#C0C6CC";
    ctx.lineWidth = 1;
    for(let r=20; r<=radius; r+=20){
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, 2*Math.PI);
        ctx.stroke();
    }

    // Draw skill lines & labels
    skills.forEach((skill, index)=>{
        const angle = index*angleStep - Math.PI/2;
        const x = centerX + radius*Math.cos(angle)*(skill.level/100);
        const y = centerY + radius*Math.sin(angle)*(skill.level/100);

        // Line
        ctx.strokeStyle = "#4B9CD3";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Label
        ctx.fillStyle = "#C0C6CC";
        ctx.font = "12px Inter";
        ctx.fillText(skill.name, centerX + (radius+15)*Math.cos(angle)-15, centerY + (radius+15)*Math.sin(angle));
    });
}

drawRadar();
