const generateHTML = data => {
    var html = 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>

    <!-- Import Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    
    <!-- local CSS stylesheet-->
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div class="col-12">
            <div class="row">
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body head">
                            <h5 class="card-title">${data.manager.getName()}</h5>
                            <h6 class="card-subtitle">${data.manager.getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><p class="card-text">ID: ${data.manager.getId()}</p></li>
                            <li class="list-group-item"><p class="card-text">Email: <a href="mailto:${data.manager.getEmail()}" class="card-link">${data.manager.getEmail()}</a></p></li>
                            <li class="list-group-item"><p class="card-text">Phone: <a href="tel:${data.manager.getOfficeNumber()}" class="card-link">${data.manager.getOfficeNumber()}</a></p></li>
                        </ul>
                    </div>
                </div>
`;

    if (data.engineers.length > 0) {
        for (i = 0; i < data.engineers.length; i++) {
            html +=
`
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body head">
                            <h5 class="card-title">${data.engineers[i].getName()}</h5>
                            <h6 class="card-subtitle">${data.engineers[i].getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><p class="card-text">ID: ${data.engineers[i].getId()}</p></li>
                            <li class="list-group-item"><p class="card-text">Email: <a href="mailto:${data.engineers[i].getEmail()}" class="card-link">${data.engineers[i].getEmail()}</a></p></li>
                            <li class="list-group-item"><p class="card-text">GitHub: <a href="https://github.com/${data.engineers[i].getGithub()}" class="card-link">${data.engineers[i].getGithub()}</a></p></li>
                        </ul>
                    </div>
                </div>
`
        }
    }

    if (data.interns.length > 0) {
        for (i = 0; i < data.interns.length; i++) {
            html +=
`
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body head">
                            <h5 class="card-title">${data.interns[i].getName()}</h5>
                            <h6 class="card-subtitle">${data.interns[i].getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><p class="card-text">ID: ${data.interns[i].getId()}</p></li>
                            <li class="list-group-item"><p class="card-text">Email: <a href="mailto:${data.interns[i].getEmail()}" class="card-link">${data.interns[i].getEmail()}</a></p></li>
                            <li class="list-group-item"><p class="card-text">School: ${data.interns[i].getSchool()}</p></li>
                        </ul>
                    </div>
                </div>
`
        }
    }

    html +=
`
            </div>
        </div>
    </main>
</body>

</html>
`
    return html;
};

module.exports = generateHTML;