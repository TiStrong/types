import fb from 'facebook';

export default class Facebook {
    constructor() {
        const fbWin = Ti.UI.createWindow();
        // Required for Android
        fb.createActivityWorker({
            lifecycleContainer: fbWin,
        });


        this.setButtonState();

        // Listen for Login event
        fb.addEventListener('login', ({ success, cancelled, error }) => {
            if (success) {
                console.log('Modules.Facebook', 'login');
            } else if (cancelled) {
                // user cancelled
                console.log('Modules.Facebook', 'canceled');
            } else {
                console.log('Modules.Facebook', error);
            }
            this.setButtonState();
        });

        // Listen for Logout event
        fb.addEventListener('logout', () => {
            this.setButtonState();
        });

        // Listen for share complete event
        fb.addEventListener('shareCompleted', ({ success }) => {
            if (success) {
                console.log('Modules.Facebook', 'shareCompleted');
            } else {
                console.log('Modules.Facebook', 'shareCompleted failed');
            }
        });
    }

    // gets user profile information (name, picture, friends, posts)
    getGraphPath() {
        fb.requestWithGraphPath(
            'me',
            {
                fields: 'id,name,picture,friends,posts',
            },
            'GET',
            (e: any) => {
                if (e.success) {
                    const respObj = JSON.parse(e.result);
                    console.log('Modules.Facebook.requestWithGraphPath', respObj);
                } else if (e.error) {
                    console.log(e.error);
                } else {
                    console.log('Unknown response');
                }
            },
        );
    }

    // Set the button state
    setButtonState() {
        if (fb.loggedIn) {
            this.getGraphPath();
            console.log('Login', 'Logged in');
        } else {
            console.log('Logout', 'Logged out');
        }
    }

    // Logs out the current user
    logout() {
        fb.logout();
    }

    // Logs out the current user
    login() {
        fb.permissions = ['user_photos', 'email', 'user_friends', 'public_profile', 'user_birthday', 'user_likes'];
        fb.initialize();

        if (!fb.loggedIn) {
            fb.authorize();
        }
    }

    // Shares a post
    share() {
        fb.presentShareDialog({
            link: 'https://appcelerator.com/',
        });
    }
}
