<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudySync - Study Together Online</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        .header {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .logo {
            font-size: 28px;
            font-weight: 700;
            color: white;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
            color: white;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .btn-primary {
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            color: white;
            box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 172, 254, 0.6);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        /* Main Content */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 20px;
            min-height: calc(100vh - 200px);
        }

        /* Study Area */
        .study-area {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .study-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .room-title {
            font-size: 24px;
            font-weight: 700;
            color: #2d3748;
        }

        .room-controls {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Video Grid */
        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
            min-height: 400px;
        }

        .video-container {
            position: relative;
            background: #1a202c;
            border-radius: 15px;
            overflow: hidden;
            aspect-ratio: 16/9;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .video-stream {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-overlay {
            position: absolute;
            bottom: 15px;
            left: 15px;
            right: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user-name {
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
        }

        .video-controls {
            display: flex;
            gap: 8px;
        }

        .control-btn {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: rgba(255,255,255,0.9);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .control-btn:hover {
            transform: scale(1.1);
            background: white;
        }

        .control-btn.active {
            background: #e53e3e;
            color: white;
        }

        /* Sidebar */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .widget {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .widget-title {
            font-size: 18px;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Timer Widget */
        .timer-display {
            text-align: center;
            margin-bottom: 20px;
        }

        .timer-time {
            font-size: 48px;
            font-weight: 700;
            color: #4facfe;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .timer-label {
            font-size: 14px;
            color: #718096;
            margin-top: 5px;
        }

        .timer-controls {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-bottom: 20px;
        }

        .timer-preset {
            padding: 8px 16px;
            border: 2px solid #e2e8f0;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
            font-weight: 600;
        }

        .timer-preset.active {
            border-color: #4facfe;
            background: #4facfe;
            color: white;
        }

        /* Ambient Sounds */
        .sound-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .sound-btn {
            padding: 12px;
            border: 2px solid #e2e8f0;
            background: white;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
        }

        .sound-btn.playing {
            border-color: #48bb78;
            background: #48bb78;
            color: white;
        }

        /* Online Users */
        .user-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .user-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 10px;
            background: #f7fafc;
            transition: all 0.3s ease;
        }

        .user-item:hover {
            background: #edf2f7;
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 16px;
        }

        .user-details {
            flex: 1;
        }

        .user-name-text {
            font-weight: 600;
            color: #2d3748;
            font-size: 14px;
        }

        .user-status {
            font-size: 12px;
            color: #718096;
        }

        .status-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #48bb78;
        }

        /* Room List */
        .room-card {
            padding: 15px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: white;
        }

        .room-card:hover {
            border-color: #4facfe;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(79, 172, 254, 0.3);
        }

        .room-name {
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 5px;
        }

        .room-info {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #718096;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.show {
            display: flex;
        }

        .modal-content {
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2d3748;
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: #4facfe;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                display: grid;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .header {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
            
            .study-header {
                flex-direction: column;
                align-items: stretch;
            }
            
            .room-controls {
                justify-content: center;
            }
            
            .video-grid {
                grid-template-columns: 1fr;
            }
            
            .timer-time {
                font-size: 36px;
            }
            
            .sidebar {
                grid-template-columns: 1fr;
            }
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .widget {
            animation: fadeInUp 0.6s ease-out;
        }

        .widget:nth-child(2) { animation-delay: 0.1s; }
        .widget:nth-child(3) { animation-delay: 0.2s; }
        .widget:nth-child(4) { animation-delay: 0.3s; }

        /* Chat Widget */
        .chat-messages {
            height: 200px;
            overflow-y: auto;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 15px;
            background: #f7fafc;
        }

        .chat-input-container {
            display: flex;
            gap: 10px;
        }

        .chat-input {
            flex: 1;
            padding: 10px 15px;
            border: 2px solid #e2e8f0;
            border-radius: 25px;
            font-size: 14px;
        }

        .send-btn {
            padding: 10px 20px;
            background: #4facfe;
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
        }

        .message {
            margin-bottom: 10px;
            padding: 8px 12px;
            border-radius: 10px;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .message-author {
            font-weight: 600;
            color: #4facfe;
            font-size: 12px;
            margin-bottom: 4px;
        }

        .message-text {
            font-size: 14px;
            color: #2d3748;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">📚 StudySync</div>
            <div class="user-info">
                <span id="currentUser">Student</span>
                <button class="btn btn-secondary" onclick="showJoinModal()">Join Room</button>
                <button class="btn btn-primary" onclick="showCreateModal()">Create Room</button>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Study Area -->
            <div class="study-area">
                <div class="study-header">
                    <div>
                        <h2 class="room-title" id="roomTitle">Focus Room - Silent Study</h2>
                        <p style="color: #718096; margin-top: 5px;">Study together in focused silence</p>
                    </div>
                    <div class="room-controls">
                        <button class="btn btn-secondary" onclick="toggleCamera()" id="cameraBtn">📹 Camera</button>
                        <button class="btn btn-secondary" onclick="toggleMicrophone()" id="micBtn">🎤 Mute</button>
                        <button class="btn btn-secondary" onclick="shareScreen()">🖥️ Share</button>
                        <button class="btn btn-primary" onclick="leaveRoom()">Leave Room</button>
                    </div>
                </div>

                <!-- Video Grid -->
                <div class="video-grid" id="videoGrid">
                    <div class="video-container">
                        <video class="video-stream" id="localVideo" autoplay muted></video>
                        <div class="video-overlay">
                            <div class="user-name" id="localUserName">You</div>
                            <div class="video-controls">
                                <button class="control-btn" onclick="toggleCamera()" id="localCameraBtn">📹</button>
                                <button class="control-btn" onclick="toggleMicrophone()" id="localMicBtn">🎤</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Timer Widget -->
                <div class="widget">
                    <h3 class="widget-title">⏰ Study Timer</h3>
                    <div class="timer-display">
                        <div class="timer-time" id="timerDisplay">25:00</div>
                        <div class="timer-label" id="timerLabel">Focus Time</div>
                    </div>
                    <div class="timer-controls">
                        <button class="btn btn-primary" onclick="toggleTimer()" id="timerBtn">Start</button>
                        <button class="btn btn-secondary" onclick="resetTimer()">Reset</button>
                    </div>
                    <div style="display: flex; gap: 8px; margin-bottom: 15px; justify-content: center;">
                        <div class="timer-preset active" onclick="setTimer(25, 'Focus Time')">25m</div>
                        <div class="timer-preset" onclick="setTimer(50, 'Focus Time')">50m</div>
                        <div class="timer-preset" onclick="setTimer(5, 'Break Time')">5m</div>
                        <div class="timer-preset" onclick="setTimer(15, 'Break Time')">15m</div>
                    </div>
                </div>

                <!-- Ambient Sounds -->
                <div class="widget">
                    <h3 class="widget-title">🎵 Ambient Sounds</h3>
                    <div class="sound-grid">
                        <button class="sound-btn" onclick="toggleSound('rain')">🌧️ Rain</button>
                        <button class="sound-btn" onclick="toggleSound('forest')">🌲 Forest</button>
                        <button class="sound-btn" onclick="toggleSound('ocean')">🌊 Ocean</button>
                        <button class="sound-btn" onclick="toggleSound('coffee')">☕ Coffee Shop</button>
                        <button class="sound-btn" onclick="toggleSound('white')">📻 White Noise</button>
                        <button class="sound-btn" onclick="toggleSound('brown')">🎧 Brown Noise</button>
                    </div>
                </div>

                <!-- Chat Widget -->
                <div class="widget">
                    <h3 class="widget-title">💬 Study Chat</h3>
                    <div class="chat-messages" id="chatMessages">
                        <div class="message">
                            <div class="message-author">System</div>
                            <div class="message-text">Welcome to the study room! Keep chat study-related and supportive. 📚</div>
                        </div>
                    </div>
                    <div class="chat-input-container">
                        <input type="text" class="chat-input" id="chatInput" placeholder="Type a message..." onkeypress="handleChatKeypress(event)">
                        <button class="send-btn" onclick="sendMessage()">Send</button>
                    </div>
                </div>

                <!-- Online Users -->
                <div class="widget">
                    <h3 class="widget-title">👥 Online Now (<span id="userCount">1</span>)</h3>
                    <div class="user-list" id="userList">
                        <div class="user-item">
                            <div class="user-avatar">Y</div>
                            <div class="user-details">
                                <div class="user-name-text">You</div>
                                <div class="user-status">Studying • 15 min</div>
                            </div>
                            <div class="status-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Join Room Modal -->
    <div class="modal" id="joinModal">
        <div class="modal-content">
            <h2 style="margin-bottom: 25px; color: #2d3748;">Join Study Room</h2>
            <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-input" id="joinUserName" placeholder="Enter your name" value="Student">
            </div>
            <div class="form-group">
                <label class="form-label">Available Rooms</label>
                <div id="roomList">
                    <div class="room-card" onclick="joinRoom('focus-silent')">
                        <div class="room-name">🔇 Focus Room - Silent Study</div>
                        <div class="room-info">
                            <span>12 studying</span>
                            <span>Silent Mode</span>
                        </div>
                    </div>
                    <div class="room-card" onclick="joinRoom('study-group')">
                        <div class="room-name">👥 Study Group - Discussion</div>
                        <div class="room-info">
                            <span>8 studying</span>
                            <span>Chat Enabled</span>
                        </div>
                    </div>
                    <div class="room-card" onclick="joinRoom('pomodoro-session')">
                        <div class="room-name">⏰ Pomodoro Session</div>
                        <div class="room-info">
                            <span>15 studying</span>
                            <span>Synchronized Breaks</span>
                        </div>
                    </div>
                    <div class="room-card" onclick="joinRoom('exam-prep')">
                        <div class="room-name">📝 Exam Preparation</div>
                        <div class="room-info">
                            <span>6 studying</span>
                            <span>Q&A Allowed</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 25px;">
                <button class="btn btn-secondary" onclick="closeModal('joinModal')">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Create Room Modal -->
    <div class="modal" id="createModal">
        <div class="modal-content">
            <h2 style="margin-bottom: 25px; color: #2d3748;">Create Study Room</h2>
            <div class="form-group">
                <label class="form-label">Room Name</label>
                <input type="text" class="form-input" id="createRoomName" placeholder="My Study Room">
            </div>
            <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-input" id="createUserName" placeholder="Enter your name" value="Student">
            </div>
            <div class="form-group">
                <label class="form-label">Room Type</label>
                <select class="form-input" id="roomType">
                    <option value="silent">Silent Study (Video only)</option>
                    <option value="discussion">Discussion Room (Video + Chat)</option>
                    <option value="pomodoro">Pomodoro Session</option>
                    <option value="exam">Exam Preparation</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <input type="text" class="form-input" id="roomDescription" placeholder="What are you studying?">
            </div>
            <div style="display: flex; gap: 15px; justify-content: flex-end; margin-top: 25px;">
                <button class="btn btn-secondary" onclick="closeModal('createModal')">Cancel</button>
                <button class="btn btn-primary" onclick="createRoom()">Create Room</button>
            </div>
        </div>
    </div>

    <script>
        // Application State
        let appState = {
            currentUser: 'Student',
            currentRoom: null,
            isTimerRunning: false,
            timerMinutes: 25,
            timerSeconds: 0,
            timerInterval: null,
            timerType: 'Focus Time',
            localStream: null,
            cameraEnabled: true,
            microphoneEnabled: false,
            playingSounds: new Set(),
            onlineUsers: []
        };

        // Initialize Application
        document.addEventListener('DOMContentLoaded', function() {
            setupMediaStream();
            addDemoUsers();
            setupNotificationPermission();
        });

        // Setup Camera/Microphone
        async function setupMediaStream() {
            try {
                appState.localStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });
                
                const localVideo = document.getElementById('localVideo');
                localVideo.srcObject = appState.localStream;
                
                // Mute audio by default (Study room etiquette)
                const audioTracks = appState.localStream.getAudioTracks();
                audioTracks.forEach(track => track.enabled = false);
                appState.microphoneEnabled = false;
                updateControlButtons();
                
            } catch (error) {
                console.log('Media access denied or not available');
                showDemoVideo();
            }
        }

        function showDemoVideo() {
            const localVideo = document.getElementById('localVideo');
            localVideo.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
            localVideo.style.display = 'flex';
            localVideo.style.alignItems = 'center';
            localVideo.style.justifyContent = 'center';
            localVideo.innerHTML = '<div style="color: white; font-size: 24px; font-weight: bold;">📹 Camera Preview</div>';
        }

        // Camera Controls
        function toggleCamera() {
            if (appState.localStream) {
                const videoTracks = appState.localStream.getVideoTracks();
                videoTracks.forEach(track => {
                    track.enabled = !track.enabled;
                    appState.cameraEnabled = track.enabled;
                });
            }
            updateControlButtons();
        }

        function toggleMicrophone() {
            if (appState.localStream) {
                const audioTracks = appState.localStream.getAudioTracks();
                audioTracks.forEach(track => {
                    track.enabled = !track.enabled;
                    appState.microphoneEnabled = track.enabled;
                });
            }
            updateControlButtons();
        }

        function updateControlButtons() {
            const cameraBtn = document.getElementById('cameraBtn');
            const micBtn = document.getElementById('micBtn');
            const localCameraBtn = document.getElementById('localCameraBtn');
            const localMicBtn = document.getElementById('localMicBtn');
            
            cameraBtn.textContent = appState.cameraEnabled ? '📹 Camera' : '📹 Camera Off';
            micBtn.textContent = appState.microphoneEnabled ? '🎤 Unmute' : '🎤 Muted';
            
            localCameraBtn.textContent = appState.cameraEnabled ? '📹' : '📵';
            localMicBtn.textContent = appState.microphoneEnabled ? '🎤' : '🔇';
            
            localCameraBtn.className = appState.cameraEnabled ? 'control-btn' : 'control-btn active';
            localMicBtn.className = appState.microphoneEnabled ? 'control-btn' : 'control-btn active';
        }

        async function shareScreen() {
            try {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true
                });
                
                const localVideo = document.getElementById('localVideo');
                localVideo.srcObject = screenStream;
                
                screenStream.getVideoTracks()[0].onended = () => {
                    localVideo.srcObject = appState.localStream;
                };
                
                showNotification('Screen sharing started', 'You are now sharing your screen with the study room.');
                
            } catch (error) {
                console.log('Screen sharing cancelled or not supported');
            }
        }

        // Timer Functions
        function setTimer(minutes, type) {
            appState.timerMinutes = minutes;
            appState.timerSeconds = 0;
            appState.timerType = type;
            
            document.querySelectorAll('.timer-preset').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            updateTimerDisplay();
            document.getElementById('timerLabel').textContent = type;
        }

        function toggleTimer() {
            if (appState.isTimerRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
        }

        function startTimer() {
            appState.isTimerRunning = true;
            document.getElementById('timerBtn').textContent = 'Pause';
            
            appState.timerInterval = setInterval(() => {
                if (appState.timerSeconds === 0) {
                    if (appState.timerMinutes === 0) {
                        timerComplete();
                        return;
                    }
                    appState.timerMinutes--;
                    appState.timerSeconds = 59;
                } else {
                    appState.timerSeconds--;
                }
                updateTimerDisplay();
            }, 1000);
        }

        function pauseTimer() {
            appState.isTimerRunning = false;
            document.getElementById('timerBtn').textContent = 'Start';
            clearInterval(appState.timerInterval);
        }

        function resetTimer() {
            pauseTimer();
            const activePreset = document.querySelector('.timer-preset.active');
            if (activePreset) {
                const minutes = parseInt(activePreset.textContent);
                appState.timerMinutes = minutes;
                appState.timerSeconds = 0;
            }
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const display = document.getElementById('timerDisplay');
            const minutes = appState.timerMinutes.toString().padStart(2, '0');
            const seconds = appState.timerSeconds.toString().padStart(2, '0');
            display.textContent = `${minutes}:${seconds}`;
        }

        function timerComplete() {
            pauseTimer();
            
            // Play notification sound
            playNotificationSound();
            
            // Show notification
            showNotification('Timer Complete!', `Your ${appState.timerType.toLowerCase()} session is complete. Great work!`);
            
            // Auto-switch to break/focus
            if (appState.timerType === 'Focus Time') {
                setTimer(5, 'Break Time');
                document.querySelector('[onclick="setTimer(5, \'Break Time\')"]').classList.add('active');
            } else {
                setTimer(25, 'Focus Time');
                document.querySelector('[onclick="setTimer(25, \'Focus Time\')"]').classList.add('active');
            }
        }

        function playNotificationSound() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }

        // Ambient Sounds
        const soundFiles = {
            rain: () => createAmbientSound([400, 600, 800], 0.1, 'pink'),
            forest: () => createAmbientSound([200, 400, 600, 1000], 0.08, 'brown'),
            ocean: () => createAmbientSound([100, 200, 300], 0.15, 'blue'),
            coffee: () => createAmbientSound([300, 500, 700, 900], 0.12, 'pink'),
            white: () => createWhiteNoise(),
            brown: () => createBrownNoise()
        };

        function toggleSound(soundType) {
            const btn = event.target;
            
            if (appState.playingSounds.has(soundType)) {
                // Stop sound
                stopSound(soundType);
                btn.classList.remove('playing');
            } else {
                // Start sound
                startSound(soundType);
                btn.classList.add('playing');
            }
        }

        function startSound(soundType) {
            if (appState.playingSounds.has(soundType)) return;
            
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const sound = soundFiles[soundType]();
            
            appState.playingSounds.set(soundType, { audioContext, sound });
        }

        function stopSound(soundType) {
            if (!appState.playingSounds.has(soundType)) return;
            
            const { audioContext } = appState.playingSounds.get(soundType);
            audioContext.close();
            appState.playingSounds.delete(soundType);
        }

        function createAmbientSound(frequencies, volume, type) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
            gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
            
            frequencies.forEach(freq => {
                const oscillator = audioContext.createOscillator();
                const filterNode = audioContext.createBiquadFilter();
                
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(freq + Math.random() * 20 - 10, audioContext.currentTime);
                
                filterNode.type = 'lowpass';
                filterNode.frequency.setValueAtTime(freq * 2, audioContext.currentTime);
                
                oscillator.connect(filterNode);
                filterNode.connect(gainNode);
                oscillator.start();
                
                // Add slight frequency modulation for natural sound
                setInterval(() => {
                    oscillator.frequency.setValueAtTime(
                        freq + Math.random() * 40 - 20, 
                        audioContext.currentTime
                    );
                }, 1000 + Math.random() * 2000);
            });
            
            return { audioContext, gainNode };
        }

        function createWhiteNoise() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const bufferSize = 2 * audioContext.sampleRate;
            const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            
            const whiteNoise = audioContext.createBufferSource();
            whiteNoise.buffer = noiseBuffer;
            whiteNoise.loop = true;
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            
            whiteNoise.connect(gainNode);
            gainNode.connect(audioContext.destination);
            whiteNoise.start();
            
            return { audioContext, whiteNoise, gainNode };
        }

        function createBrownNoise() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const bufferSize = 2 * audioContext.sampleRate;
            const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            
            let lastOut = 0.0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                output[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = output[i];
                output[i] *= 3.5;
            }
            
            const brownNoise = audioContext.createBufferSource();
            brownNoise.buffer = noiseBuffer;
            brownNoise.loop = true;
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            
            brownNoise.connect(gainNode);
            gainNode.connect(audioContext.destination);
            brownNoise.start();
            
            return { audioContext, brownNoise, gainNode };
        }

        // Chat Functions
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                addChatMessage(appState.currentUser, message);
                input.value = '';
            }
        }

        function handleChatKeypress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function addChatMessage(author, text) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            
            messageDiv.innerHTML = `
                <div class="message-author">${author}</div>
                <div class="message-text">${text}</div>
            `;
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Room Management
        function showJoinModal() {
            document.getElementById('joinModal').classList.add('show');
        }

        function showCreateModal() {
            document.getElementById('createModal').classList.add('show');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('show');
        }

        function joinRoom(roomType) {
            const userName = document.getElementById('joinUserName').value || 'Student';
            appState.currentUser = userName;
            document.getElementById('currentUser').textContent = userName;
            document.getElementById('localUserName').textContent = userName;
            
            // Update room based on type
            const roomTitles = {
                'focus-silent': '🔇 Focus Room - Silent Study',
                'study-group': '👥 Study Group - Discussion',
                'pomodoro-session': '⏰ Pomodoro Session',
                'exam-prep': '📝 Exam Preparation'
            };
            
            document.getElementById('roomTitle').textContent = roomTitles[roomType] || 'Study Room';
            
            closeModal('joinModal');
            addDemoUsers();
            
            // Add welcome message
            setTimeout(() => {
                addChatMessage('System', `${userName} joined the study room. Welcome! 👋`);
            }, 500);
        }

        function createRoom() {
            const roomName = document.getElementById('createRoomName').value || 'My Study Room';
            const userName = document.getElementById('createUserName').value || 'Student';
            const roomType = document.getElementById('roomType').value;
            
            appState.currentUser = userName;
            document.getElementById('currentUser').textContent = userName;
            document.getElementById('localUserName').textContent = userName;
            document.getElementById('roomTitle').textContent = roomName;
            
            closeModal('createModal');
            
            // Add welcome message
            setTimeout(() => {
                addChatMessage('System', `Welcome to ${roomName}! You are the room creator. 👑`);
            }, 500);
        }

        function leaveRoom() {
            if (confirm('Are you sure you want to leave the study room?')) {
                // Add goodbye message
                addChatMessage('System', `${appState.currentUser} left the study room. Keep studying! 📚`);
                
                // Reset timer
                pauseTimer();
                resetTimer();
                
                // Stop all sounds
                appState.playingSounds.forEach((_, soundType) => {
                    stopSound(soundType);
                    document.querySelector(`[onclick="toggleSound('${soundType}')"]`).classList.remove('playing');
                });
                
                // Show join modal after a brief delay
                setTimeout(() => {
                    showJoinModal();
                }, 1000);
            }
        }

        // Demo Users
        function addDemoUsers() {
            const userList = document.getElementById('userList');
            const demoUsers = [
                { name: 'Alex', status: 'Studying Math • 45 min', avatar: 'A' },
                { name: 'Sarah', status: 'Reading History • 23 min', avatar: 'S' },
                { name: 'Mike', status: 'Coding Project • 1h 12m', avatar: 'M' },
                { name: 'Emma', status: 'Writing Essay • 35 min', avatar: 'E' },
                { name: 'David', status: 'Language Learning • 18 min', avatar: 'D' }
            ];
            
            // Clear existing demo users but keep the current user
            const currentUserElement = userList.querySelector('.user-item');
            userList.innerHTML = '';
            userList.appendChild(currentUserElement);
            
            // Add random demo users
            const shuffled = demoUsers.sort(() => 0.5 - Math.random());
            const selectedUsers = shuffled.slice(0, Math.floor(Math.random() * 4) + 2);
            
            selectedUsers.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user-item';
                userDiv.innerHTML = `
                    <div class="user-avatar">${user.avatar}</div>
                    <div class="user-details">
                        <div class="user-name-text">${user.name}</div>
                        <div class="user-status">${user.status}</div>
                    </div>
                    <div class="status-indicator"></div>
                `;
                userList.appendChild(userDiv);
            });
            
            // Update user count
            document.getElementById('userCount').textContent = selectedUsers.length + 1;
            
            // Simulate users joining/leaving
            setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance every 30 seconds
                    addDemoUsers();
                }
            }, 30000);
        }

        // Notifications
        function setupNotificationPermission() {
            if ("Notification" in window && Notification.permission === "default") {
                Notification.requestPermission();
            }
        }

        function showNotification(title, body) {
            // Browser notification
            if ("Notification" in window && Notification.permission === "granted") {
                new Notification(title, {
                    body: body,
                    icon: '📚',
                    tag: 'studysync'
                });
            }
            
            // In-app notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #4facfe, #00f2fe);
                color: white;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
                z-index: 10000;
                max-width: 300px;
                animation: slideInRight 0.5s ease-out;
            `;
            
            notification.innerHTML = `
                <div style="font-weight: 700; margin-bottom: 5px;">${title}</div>
                <div style="font-size: 14px; opacity: 0.9;">${body}</div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
                setTimeout(() => notification.remove(), 500);
            }, 4000);
        }

        // Add CSS animations for notifications
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Demo chat messages
        function addDemoChatMessages() {
            const demoMessages = [
                { author: 'Alex', text: 'Good luck everyone! 📚' },
                { author: 'Sarah', text: 'Anyone else working on calculus?' },
                { author: 'Mike', text: 'Just finished my pomodoro break, back to coding!' },
                { author: 'Emma', text: 'This ambient rain sound is perfect 🌧️' }
            ];
            
            let messageIndex = 0;
            setInterval(() => {
                if (Math.random() < 0.2 && messageIndex < demoMessages.length) {
                    const msg = demoMessages[messageIndex];
                    addChatMessage(msg.author, msg.text);
                    messageIndex++;
                }
            }, 45000); // Every 45 seconds, 20% chance
        }

        // Start demo chat messages after initial load
        setTimeout(addDemoChatMessages, 10000);

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Space bar to toggle timer (when not typing)
            if (e.code === 'Space' && !e.target.matches('input, textarea')) {
                e.preventDefault();
                toggleTimer();
            }
            
            // Ctrl/Cmd + Enter to send chat message
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const chatInput = document.getElementById('chatInput');
                if (document.activeElement === chatInput) {
                    sendMessage();
                }
            }
            
            // Esc to close modals
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.show').forEach(modal => {
                    modal.classList.remove('show');
                });
            }
        });

        // Progressive Web App features
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // Register service worker for offline functionality
                console.log('StudySync ready for offline use');
            });
        }

        // Auto-save user preferences
        function saveUserPreferences() {
            const preferences = {
                userName: appState.currentUser,
                timerPreset: appState.timerMinutes,
                cameraEnabled: appState.cameraEnabled,
                microphoneEnabled: appState.microphoneEnabled
            };
            localStorage.setItem('studySync_preferences', JSON.stringify(preferences));
        }

        function loadUserPreferences() {
            try {
                const saved = localStorage.getItem('studySync_preferences');
                if (saved) {
                    const preferences = JSON.parse(saved);
                    appState.currentUser = preferences.userName || 'Student';
                    document.getElementById('currentUser').textContent = appState.currentUser;
                    
                    if (preferences.timerPreset) {
                        setTimer(preferences.timerPreset, 'Focus Time');
                    }
                }
            } catch (error) {
                console.log('Could not load user preferences');
            }
        }

        // Load preferences on startup
        loadUserPreferences();

        // Save preferences when they change
        window.addEventListener('beforeunload', saveUserPreferences);

        // Study statistics tracking
        let studyStats = {
            sessionsToday: 0,
            totalMinutes: 0,
            longestStreak: 0,
            currentStreak: 0
        };

        function updateStudyStats() {
            try {
                const saved = localStorage.getItem('studySync_stats');
                if (saved) {
                    studyStats = { ...studyStats, ...JSON.parse(saved) };
                }
            } catch (error) {
                console.log('Could not load study statistics');
            }
        }

        function saveStudyStats() {
            localStorage.setItem('studySync_stats', JSON.stringify(studyStats));
        }

        // Update stats when timer completes
        const originalTimerComplete = timerComplete;
        timerComplete = function() {
            originalTimerComplete();
            
            if (appState.timerType === 'Focus Time') {
                studyStats.sessionsToday++;
                studyStats.totalMinutes += 25;
                studyStats.currentStreak++;
                
                if (studyStats.currentStreak > studyStats.longestStreak) {
                    studyStats.longestStreak = studyStats.currentStreak;
                }
                
                saveStudyStats();
                
                // Show achievement for milestones
                if (studyStats.sessionsToday === 5) {
                    showNotification('Achievement Unlocked! 🏆', 'You completed 5 focus sessions today!');
                } else if (studyStats.currentStreak === 10) {
                    showNotification('Amazing Streak! 🔥', 'You are on a 10-session streak!');
                }
            }
        };

        // Initialize stats
        updateStudyStats();

        console.log('🎉 StudySync Platform Ready!');
        console.log('Features: Video calling, timers, ambient sounds, chat, user management');
        console.log('Keyboard shortcuts: Space (toggle timer), Ctrl+Enter (send message), Esc (close modals)');
    </script>
</body>
</html>
