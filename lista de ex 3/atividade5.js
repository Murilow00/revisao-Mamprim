const usuario = {
    username: "dev_javascript",
    tags: ['js', 'programação', 'web'],
    listarTags: function() {
        
        this.tags.forEach((tag) => {
            console.log(this.username + " marcou a tag: " + tag);
        });
    }
};

usuario.listarTags();