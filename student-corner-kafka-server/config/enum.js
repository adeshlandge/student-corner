exports.topic_names = {
    REGISTER: 'register_request',
    LOGIN: 'login_request',
    LOGOUT: 'logout_request',
    LIST_FILES: {
        USER_FILES : 'list_files_request',
        SHARED_FILES: 'shared_files_request'
    },
    UPLOAD_FILES: 'upload_files_request',
    SET_UPLOAD_PATH: 'setuploadpath_request',
    GET_USER_DETAILS: 'getUserDetails_request',
    INSERT_SHARE_DETAILS: 'insertShareDetails_request',
    MAKE_DIRECTORY: 'makeDirectory_request',
    SAVE_DIRECTORY: 'saveDirectory_request',
    STAR_FILE: 'starFile_request',
    CREATE_GROUP: 'creategroup_request',
    ADD_MEMBERS_GROUP: 'addMembers_request',
    GROUP_SHARE_FILE_UPLOAD: 'groupShareFileUpload_request',
    LIST_GROUP_FILES: 'listGroupFiles_request',
    LIST_GROUPS: 'listGroups_request',
    LIST_GROUPS_MEMBERS: 'listGroupMembers_request',
    // added new code for posts
    CREATE_POSTS: 'createPost_request',
    LIST_POSTS: 'listPost_request',
    FETCH_POST: 'fetchPost_request',
    DELETE_POST: 'deletePost_request',
    CREATE_COMMENT: 'createComment_request',
    GET_COMMENTS: 'getComment_request',
};