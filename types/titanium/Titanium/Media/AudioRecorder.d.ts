declare namespace Titanium {
	namespace Media {
		/**
		 * An audio recorder object used for recording audio from the device microphone.
		 */
		class AudioRecorder extends Titanium.Proxy {
			/**
			 * Audio compression to be used for the recording.
			 */
			compression: number;

			/**
			 * Audio format to be used for the recording.
			 */
			format: number;

			/**
			 * Indicates if the audio recorder is paused.
			 */
			readonly paused: boolean;

			/**
			 * Indicates if the audio recorder is recording.
			 */
			readonly recording: boolean;

			/**
			 * Indicates if the audio recorder is stopped.
			 */
			readonly stopped: boolean;

			/**
			 * Adds the specified callback as an event listener for the named event.
			 */
			addEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Fires a synthesized event to any registered listeners.
			 */
			fireEvent(name: string, event?: any): void;

			/**
			 * Pauses the current audio recording.
			 */
			pause(): void;

			/**
			 * Removes the specified callback as an event listener for the named event.
			 */
			removeEventListener(name: string, callback: (param0: Titanium.Event) => void): void;

			/**
			 * Resumes a paused recording.
			 */
			resume(): void;

			/**
			 * Starts an audio recording.
			 */
			start(): void;

			/**
			 * Stops the current audio recording and returns the recorded audio file.
			 */
			stop(): Titanium.Filesystem.File;

		}
	}
}
