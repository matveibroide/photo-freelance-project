function changeNewLink(num,selector) {

    const newLink = document.querySelector(selector);
    switch (num) {
        case 0: 
    newLink.innerHTML = '<a href="https://www.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_9440478.htm#query=portraits&position=0&from_view=search&track=sph">Image by wayhomestudio</a> on Freepik';
        break;
        case 1:
    newLink.innerHTML ='<a href="https://www.freepik.com/free-photo/wedding-couple-france_1612423.htm#query=wedding%20photo&position=2&from_view=search&track=sph">Image by senivpetro</a> on Freepik';
        break;
        case 2:
    newLink.innerHTML = 'Image by <a href="https://www.freepik.com/free-photo/father-son-spending-time-together_19865456.htm?query=family%20photo?query=family%20photo?query=family%20photo&collectionId=372&&position=1&from_view=collections">Freepik</a>';
        break;
        case 3:
    newLink.innerHTML = '<a href="https://www.freepik.com/free-photo/two-happy-men-working-together-new-business-project_7337520.htm#query=work&position=0&from_view=search&track=sph">Image by drobotdean</a> on Freepik';
}
}

export default changeLink;