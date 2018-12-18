// var points = [
//     new THREE.Vector3( 100, 0, 0 ),
//     new THREE.Vector3( 0, 100, 0 ),
//     new THREE.Vector3( 0, 0, 100 )
// ];

// var geometry = new THREE.ConvexGeometry( points );
// var material = new THREE.MeshPhongMaterial( {
//     color: 0xff0000, 
//     shading: THREE.FlatShading
// } );

// mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );


renderer = new THREE.WebGLRenderer ();
renderer.setSize (400, 400);
document.body.appendChild(renderer.domElement);

scene = new THREE.Scene ();
camera = new THREE.PerspectiveCamera (45, 400 / 400, 0.1, 10000);
camera.position.set (3, 1, 2);
camera.up.set (0, 0, 1);
camera.lookAt (new THREE.Vector3 (0, 0, 0));
scene.add (camera);

var material = new THREE.MeshLambertMaterial ({
    color: 0x00cc00
});

var vertices = [
    1, 0, 0,
    0.5, 0.866, 0,
    -0.5, 0.866, 0,
    -1, 0, 0,
    -0.5, -0.866, 0,
    0.5, -0.866, 0
];
fa=vertices.length/3;
// var faces = [
//     [0, 1, 2, 3],
//     [0, 3, 4],
//     [1,2,3]
// ];

var geometry = new THREE.Geometry ();
var i, j, face;
for (i = 0; i < vertices.length; i += 3) {
    geometry.vertices.push (new THREE.Vector3 (
        vertices[i],
        vertices[i + 1],
        vertices[i + 2]
    ));
}
var i, j, face;
for (i = 0; i < fa; i++) {
    //face = faces[i];
    for (j = 1; j < fa-1; j++) {
        geometry.faces.push (new THREE.Face3 (0,j,j+1));
    }
}

geometry.computeFaceNormals ();
var mesh = new THREE.Mesh (geometry, material);
scene.add (mesh);

var directionalLight = new THREE.DirectionalLight (0xffffff);
directionalLight.position.set (3, 1, 2).normalize ();
scene.add (directionalLight);

renderer.setClearColor (0xffffff);
renderer.render (scene, camera);


// renderer = new THREE.WebGLRenderer ();
// renderer.setSize (400, 400);
// document.body.appendChild(renderer.domElement);

// scene = new THREE.Scene ();
// camera = new THREE.PerspectiveCamera (45, 400 / 400, 0.1, 10000);
// camera.position.set (3, 1, 2);
// camera.up.set (0, 0, 1);
// camera.lookAt (new THREE.Vector3 (0, 0, 0));
// scene.add (camera);

// var material = new THREE.MeshLambertMaterial ({
//     color: 0x00cc00
// });

// var vertices = [
//     0, 0, 0,
//     1, 0, 0,
//     1, 1, 0,
//     0, 1, 0,
//     0, 0, 1,
//     1 ,1 ,1
// ];
// fa=vertices.length/6;
// var faces = [
//     [0, 1, 2, 3],
//     [0, 3, 4],
//     [1,2,3]
// ];

// var geometry = new THREE.Geometry ();
// var i, j, face;
// for (i = 0; i < vertices.length; i += 3) {
//     geometry.vertices.push (new THREE.Vector3 (
//         vertices[i],
//         vertices[i + 1],
//         vertices[i + 2]
//     ));
// }
// var i, j, face;
// for (i = 0; i < faces.length; i++) {
//     face = faces[i];
//     for (j = 1; j < face.length - 1; j++) {
//         geometry.faces.push (new THREE.Face3 (face[0], face[j], face[j + 1]));
//     }
// }

// geometry.computeFaceNormals ();
// var mesh = new THREE.Mesh (geometry, material);
// scene.add (mesh);

// var directionalLight = new THREE.DirectionalLight (0xffffff);
// directionalLight.position.set (3, 1, 2).normalize ();
// scene.add (directionalLight);

// renderer.setClearColor (0xffffff);
// renderer.render (scene, camera);

