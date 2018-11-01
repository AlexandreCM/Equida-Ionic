<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
require_once("DB.php");

try
{
    if ($db = new DB("localhost", "IONAC", "root", "qwerty")) {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {

                // API Chevaux
                if ($_GET['key'] == "getLesChevaux") {
                    echo json_encode($db->query("SELECT * FROM cheval"));
                    http_response_code(200);
                }
                else if ($_GET['key'] == "getCheval") {
                    if (isset($_GET['id'])) {
                        $idCheval = $_GET['id'];
                        echo json_encode($db->query("SELECT cheval.id, nom, sexe, dateNaissance, prixDepart, typeCheval.id AS idType, libelle FROM cheval, typecheval WHERE typeCheval=typeCheval.id AND cheval.id = :idCheval", array(':idCheval'=>$idCheval)));
                        http_response_code(200);
                  } else {
                        http_response_code(401);
                  }
                }
                else if ($_GET['key'] == "getLesCoursesCheval") {
                    if (isset($_GET['id'])) {
                        $idCheval = $_GET['id'];
                        echo json_encode($db->query("SELECT cheval.nom AS cheNom, course.id, course.nom AS couNom, course.lieu, course.date, participer.place FROM cheval, course, participer WHERE participer.course = course.id AND participer.cheval = cheval.id AND cheval.id = :idCheval", array(':idCheval'=>$idCheval)));
                        http_response_code(200);
                  } else {
                        http_response_code(401);
                  }
                }
                else if ($_GET['key'] == "getLesTypesCheval") {
                    echo json_encode($db->query("SELECT * FROM typeCheval"));
                    http_response_code(200);
                }

                // API Ventes
                else if ($_GET['key'] == "getLesVentes") {
                    echo json_encode($db->query("SELECT * FROM vente"));
                    http_response_code(200);
                }
                else if ($_GET['key'] == "getVente") {
                    if (isset($_GET['id'])) {
                        $idVente = $_GET['id'];
                        echo json_encode($db->query("SELECT vente.id AS idVente, vente.nom, vente.dateDebut, categVente.libelle, lieu.* FROM vente, lieu, categVente WHERE codeCategVente=code AND codeLieu=lieu.id AND vente.id = :idVente", array(':idVente'=>$idVente)));
                        http_response_code(200);
                    } else {
                        http_response_code(401);
                    }
                }
                else if ($_GET['key'] == "getChevauxConcerner") {
                    if (isset($_GET['id'])) {
                        $idVente = $_GET['id'];
                        echo json_encode($db->query("SELECT cheval.* FROM vente, concerner,typeCheval, cheval WHERE vente.id=codeVente AND codeTypeCheval=typeCheval.id AND typeCheval.id=cheval.typeCheval AND vente.id = :idVente", array(':idVente'=>$idVente)));
                        http_response_code(200);
                    } else {
                        http_response_code(401);
                    }
                }

                // API Courses
                else if ($_GET['key'] == "getLesCourses") {
                    echo json_encode($db->query("SELECT * FROM course"));
                    http_response_code(200);
                }
                else if ($_GET['key'] == "getCourse") {
                    if (isset($_GET['id'])) {
                        $idCourse = $_GET['id'];
                        echo json_encode($db->query("SELECT * FROM course WHERE id = :idCourse", array(':idCourse'=>$idCourse)));
                        http_response_code(200);
                  } else {
                        http_response_code(401);
                  }
                }

                // API Clients
                else if ($_GET['key'] == "getLesClients") {
                    echo json_encode($db->query("SELECT id, nom, prenom FROM client"));
                    http_response_code(200);
                }
                else if ($_GET['key'] == "getClient") {
                    if (isset($_GET['id'])) {
                        $idClient = $_GET['id'];
                        echo json_encode($db->query("SELECT client.*, pays.nom AS unPays FROM client, pays WHERE codePays=code AND id = :idClient", array(':idClient'=>$idClient)));
                        http_response_code(200);
                  } else {
                        http_response_code(401);
                  }
                }
                else if ($_GET['key'] == "getCategClient") {
                    if (isset($_GET['id'])) {
                        $idClient = $_GET['id'];
                        echo json_encode($db->query("SELECT code, libelle, client.id AS idClient FROM categVente, interesser, client WHERE code=codeCategVente AND codeClient=id AND client.id = :idClient", array(':idClient'=>$idClient)));
                        http_response_code(200);
                  } else {
                        http_response_code(401);
                  }
                }
                else if ($_GET['key'] == "getVentesCateg") {
                    if (isset($_GET['id'])) {
                        $idCateg = $_GET['id'];
                        echo json_encode($db->query("SELECT vente.id AS idVente, vente.nom AS nomVente FROM vente, categVente WHERE codeCategVente=code AND code LIKE :idCateg", array(':idCateg'=>$idCateg)));
                        http_response_code(200);
                    } else {
                        http_response_code(401);
                    }
                }
                else if ($_GET['key'] == "getLesCategVentes") {
                    echo json_encode($db->query("SELECT * FROM categVente"));
                    http_response_code(200);
                }

                // Error no GET find
        		else {
        			// echo "Bad request";
        			http_response_code(405);
        		}

        } else if ($_SERVER['REQUEST_METHOD'] == "POST") {
                if ($_GET['key'] == "ajouterCheval") {

                    $postBody = file_get_contents("php://input");
                    $postBody = json_decode($postBody);

                    // $cheval_id = $postBody->id;
                    $cheval_nom = $postBody->nom;
                    $cheval_sexe = $postBody->sexe;
                    $cheval_prix = $postBody->prix;
                    $cheval_type = $postBody->type;
                    $cheval_dateNaissance = $postBody->dateNaissance;

                    $data = $db->query("INSERT INTO cheval (nom, sexe, prixDepart, typeCheval, dateNaissance) VALUES(:cheval_nom, :cheval_sexe, :cheval_prix, :cheval_type, :cheval_dateNaissance)", array(':cheval_nom'=>$cheval_nom, ':cheval_sexe'=>$cheval_sexe,':cheval_prix'=>$cheval_prix, ':cheval_type'=>$cheval_type, ':cheval_dateNaissance'=>$cheval_dateNaissance));
                    http_response_code(200);

                    // if($db->query("SELECT id FROM cheval WHERE id=:cheval_id", array(':cheval_id' => , $cheval_id))) {
                    // }

                }
                else if ($_GET['key'] == "updateCheval") {
                    $postBody = file_get_contents("php://input");
                    $postBody = json_decode($postBody);

                    $cheval_id = $postBody->id;
                    $cheval_nom = $postBody->nom;
                    $cheval_sexe = $postBody->sexe;
                    $cheval_prix = $postBody->prix;
                    $cheval_type = $postBody->type;
                    $cheval_dateNaissance = $postBody->dateNaissance;

                    // UPDATE cheval SET nom = ':cheval_nom', sexe = ':cheval_sexe', prixDepart = ':cheval_prix', typeCheval = ':cheval_type', dateNaissance = ':cheval_dateNaissance' WHERE id = ':cheval_id'

                    $data = $db->query("UPDATE cheval SET nom = :cheval_nom, sexe = :cheval_sexe, prixDepart = :cheval_prix, typeCheval = :cheval_type, dateNaissance = :cheval_dateNaissance WHERE id = :cheval_id", array(':cheval_id'=>$cheval_id, ':cheval_nom'=>$cheval_nom, ':cheval_sexe'=>$cheval_sexe,':cheval_prix'=>$cheval_prix, ':cheval_type'=>$cheval_type, ':cheval_dateNaissance'=>$cheval_dateNaissance));
                    http_response_code(200);
                }

                //Client
                else if ($_GET['key'] == "ajouterCategInteresser") {
                    $postBody = file_get_contents("php://input");
                    $postBody = json_decode($postBody);

                    $codeClient = $postBody->interClient;
                    $codeCategVente = $postBody->interCateg;

                    $data = $db->query("INSERT INTO interesser (codeClient, codeCategVente) VALUES(:codeClient, :codeCategVente)", array(':codeClient'=>$codeClient, ':codeCategVente'=>$codeCategVente));
                    http_response_code(200);
                }
                else {
        			// echo "Bad request";
        			http_response_code(405);
        		}

        } else if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
                if ($_GET['key'] == "delCheval") {
                        if (isset($_GET['id'])) {
                                if ($db->query("SELECT id FROM cheval WHERE id=:idCheval", array(':idCheval'=>$_GET['id']))) {
                                        $db->query('DELETE FROM cheval WHERE id=:idCheval', array(':idCheval'=>$_GET['id']));
                                        echo '{ "Status": "Success" }';
                                        http_response_code(200);
                                } else {
                                        echo '{ "Error": "Invalid token" }';
                                        http_response_code(400);
                                }
                        } else {
                                echo '{ "Error": "Malformed request" }';
                                http_response_code(400);
                        }
                }
        } else {
                http_response_code(405);
        }

    }
    else {
        throw new Exception('Unable to connect');
    }
}
catch(Exception $e)
{
    echo $e->getMessage();
}
