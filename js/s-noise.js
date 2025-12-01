document.addEventListener("DOMContentLoaded", function() {
    
    const canvas = document.getElementById('particleCanvas');
    const container = document.getElementById('hero-container'); 
    
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    // 顏色設定
    const colors = ['#FF3300', '#1a1a1a',  '#e0e0e0'];
    
    // 判斷是否為手機 (小於 768px)
    let isMobile = window.innerWidth < 768;

    let mouse = {
        x: null,
        y: null,
        // 手機版的手指接觸範圍稍微調小一點，比較好控制
        radius: isMobile ? 50 : 250 
    };

    let lastMouseMoveTime = 0;
    const RETURN_DELAY = 3000; 

    // --- 1. 滑鼠監聽 (Desktop) ---
    container.addEventListener('mousemove', function(event){
        const rect = container.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        lastMouseMoveTime = Date.now();
    });

    // --- 2. 觸控監聽 (Mobile / Tablet) ---
    // 加上這個，手機才能用手指撥開
    container.addEventListener('touchmove', function(event){
        event.preventDefault(); // 防止滑動畫面時拖動到視窗
        const rect = container.getBoundingClientRect();
        // 抓第一根手指頭的位置
        mouse.x = event.touches[0].clientX - rect.left;
        mouse.y = event.touches[0].clientY - rect.top;
        lastMouseMoveTime = Date.now();
    }, { passive: false });

    // 滑鼠/手指 離開
    const resetMouse = () => { mouse.x = null; mouse.y = null; };
    container.addEventListener('mouseleave', resetMouse);
    container.addEventListener('touchend', resetMouse);

    class Particle {
        constructor(x, y) {
            this.x = x; this.y = y;
            this.baseX = x; this.baseY = y;
            
            // --- 3. 尺寸控制的核心 ---
            if (isMobile) {
                // 手機版：粒子較小 (2px ~ 5px)
                this.size = (Math.random() * 6) + 2; 
            } else {
                // 桌機版：粒子較大 (4px ~ 12px)
                this.size = (Math.random() * 8) + 4; 
            }

            this.density = (Math.random() * 30) + 5; 
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            // 漂浮參數
            this.angle = Math.random() * 360; 
            this.angleSpeed = Math.random() * 0.02 + 0.005; 
            this.floatRange = Math.random() * 111 + 5; 
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        }

        update() {
            this.angle += this.angleSpeed;
            let floatX = Math.cos(this.angle) * this.floatRange;
            let floatY = Math.sin(this.angle) * this.floatRange;

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius && mouse.x !== null) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                const timeSinceMove = Date.now() - lastMouseMoveTime;
                if (mouse.x === null || distance >= mouse.radius) {
                    if (timeSinceMove > RETURN_DELAY) {
                        let currentTargetX = this.baseX + floatX;
                        let currentTargetY = this.baseY + floatY;
                        if (this.x !== currentTargetX) this.x -= (this.x - currentTargetX) / 20;
                        if (this.y !== currentTargetY) this.y -= (this.y - currentTargetY) / 20;
                    } else {
                        this.x += Math.cos(this.angle) * 0.5;
                        this.y += Math.sin(this.angle) * 0.5;
                    }
                }
            }
        }
    }

    function init() {
        particlesArray = [];
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        
        // --- 4. 密度控制 (Divider) ---
        // 數字越小 = 粒子越密 = 越耗效能
        // 手機版因為粒子變小了，如果間距太大會看起來很空，所以設為 8
        // 桌機版因為粒子大，間距設為 10 或 12 比較剛好
        const divider = isMobile ? 8 : 10; 
        
        for (let y = 0; y < canvas.height; y += divider) {
            for (let x = 0; x < canvas.width; x += divider) {
                let noiseX = x + (Math.random() * 5 - 2.5);
                let noiseY = y + (Math.random() * 5 - 2.5);
                particlesArray.push(new Particle(noiseX, noiseY));
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw();
            particlesArray[i].update();
        }
        requestAnimationFrame(animate);
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Resize 時重新偵測是不是手機
            isMobile = window.innerWidth < 768;
            mouse.radius = isMobile ? 50 : 80;
            init();
        }, 100);
    });

    init();
    animate();
});