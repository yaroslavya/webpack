export default function (message) {
    document.write("message was: " + message);
    if (IS_DEV) {
        console.log(message + " John Doe");
    }
}