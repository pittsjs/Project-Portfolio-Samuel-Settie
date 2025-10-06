var timeout = 15000;

window.setTimeout(poller, timeout);

function poller() {
    window.location = url_for("kitchen");

    window.setTimeout(poller, timeout);
}
