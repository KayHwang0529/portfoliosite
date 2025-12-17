// small interactive features:
// 1) cycle the hero subtitle every 3s
// 2) populate project modal title/body when "View Project" is clicked

document.addEventListener('DOMContentLoaded', function () {
    // subtitle rotate
    const subs = [
        "I'm an Aspiring Data Scientist",
        "I build ML models and visualizations",
        "I explore art + code",
    ];
    let idx = 0;
    const el = document.getElementById('dynamic-sub');
    if (el) {
        setInterval(() => {
            idx = (idx + 1) % subs.length;
            el.textContent = subs[idx];
        }, 3000);
    }

    // project modal population
    const modal = document.getElementById('projectModal');
    if (modal) {
        $('#projectModal').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const title = button.data('title') || 'Project';
            const modalEl = $(this);
            modalEl.find('.modal-title').text(title);
            modalEl.find('#projectModalBody').text('Details for "' + title + '" — demo content.');
        });
    }

    // small UX: social icon click -> brief alert (demo)
    document.querySelectorAll('.social-icons a').forEach(a => {
        a.addEventListener('click', (e) => {
            // let default happen; show subtle log
            console.log('Opening social link:', a.href);
        });
    });
});