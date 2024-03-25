export default {
    x: 'x',
    facebook: 'facebook',
    instagram: 'instagram',
    email: 'email',
    linkedin: 'linkedin',
    sms: 'sms',
    threads: 'threads',
    QUEUE_NAME_INCOMING: 'validation_processed',
    QUEUE_NAME_OUTGOING: 'validation_process',
    RESPONSE_VALIDATION_QUEUED: 'Validation has been queued',
    RESPONSE_VALIDATION_SUCCESS: 'Validation has been completed',
    RESPONSE_VALIDATION_ERROR:
        'Validation could not be completed. Your verification code does not match',
    RESPONSE_VALIDATION_ERROR_EMAIL: 'Validation could not be completed.',
    VALIDATIONS: {
        IS_NOT_VALID_MESSAGE: 'is not a valid parameter',
    },
    AUTHENTICATION: {
        NO_TOKEN_FOUND: 'The bearer token was not found in the header.',
        NO_VALID_TOKEN: 'The bearer token could not be successfully validated.',
        NO_VALID_REFRESH_TOKEN: 'The refresh token could not be validated.',
        NO_AUTHORIZED_ACCESS:
            'You do not have access to the requested resource.',
        NO_USER_FOUND: 'User or password is not valid',
        NO_USER_FOUND_NAN: 'User is not valid',
        NO_ROLE_VALID: 'Role is not valid',
        LOGOUT_SUCCESS: 'Logout successfully',
        NO_PALM_PROFILE_FOUND: 'Palm profile not found. Please create one.',
    },
};