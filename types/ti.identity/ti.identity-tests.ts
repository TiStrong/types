import TiIdentity from 'ti.identity';

if (!TiIdentity.isSupported()) {
	alert('Biometric authentication is not supported on this device \nor\nno identities are enrolled!');
}

if (TiIdentity.biometryType === TiIdentity.BIOMETRY_TYPE_FACE_ID) {
	alert('Face ID');
} else if (TiIdentity.biometryType === TiIdentity.BIOMETRY_TYPE_TOUCH_ID) {
	alert('Touch ID');
} else {
	alert('None available');
}

TiIdentity.authenticate({
	reason: 'Please authenticate to continue',
	fallbackTitle: '',
	callback: (e: any) => {
		TiIdentity.invalidate();
		if (!e.success) {
			alert(e.error);
		} else {
			setTimeout(() => {
				alert('Successfully authenticated!');
			}, 1000);
		}
	}
});
