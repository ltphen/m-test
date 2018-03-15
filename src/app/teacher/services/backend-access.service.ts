import { Injectable } from '@angular/core';

import { RequestService } from './../../shared/services/request.service';
import { AuthService } from './../../shared/services/auth.service';


@Injectable()
export class BackendAccessService {

	// url for the back end ressources 

	public RESSOURCE = "http://vy-cam-men-spider1025scha.mendolearn.com/backend/web/index.php";
	
	// services URI 

	public teacher = {};

	//services functions 

	public functions = {};

	// routes for functions ... 

	public routes = {};

	// access token ... from backend

	private AccessToken = "itKSlNK07mcEn8Bon1DoxjRhzjym5V1e";

	// session id ... from backend

	private sessionId = "dfIzbYU_web5_Npamuz5m9osD32lUio2";

	// account type

	public accountType = {
		student : 'student',
		teacher : 'teacher'
	};

	// request status 

	public status = {
		success : 'success',
		error : 'error'
	};

 /********************************* Back end access services for teacher ***************************************************************************/

  constructor(private request : RequestService, private auth : AuthService) {
  	this.AccessToken = auth.credentials().data.access_token;
  	this.sessionId = auth.credentials().session_id;
  	this.init();
  	this.generateFunctions();
  	this.routes["teacher"] = this.teacher;
	this.routes["functions"] = this.functions;
  }

 /********************************* Init services object ***************************************************************************/
  init(){

	  	this.teacher = {

	  		// teacher actions

	  		"teacher" : {
				
				// leccons and documents

				"getSharedLeccons" : this.RESSOURCE +  "/user/cours-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSharedPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSharedTD" : this.RESSOURCE +  "/user/td-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSharedExams" : this.RESSOURCE +  "/user/epreuve-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSharedProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				"getDisabledLeccons" : this.RESSOURCE +  "/user/cours-desactiver?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getDisabledPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-desactiver?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getDisabledTD" : this.RESSOURCE +  "/user/td-desactiver?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getDisabledExams" : this.RESSOURCE +  "/user/epreuve-desactiver?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getDisabledProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-desactiver?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				"getPublishedLeccons" : this.RESSOURCE +  "/user/cours-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getPublishedPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getPublishedTD" : this.RESSOURCE +  "/user/td-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getPublishedExams" : this.RESSOURCE +  "/user/epreuve-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getPublishedProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"AddDocument" : this.RESSOURCE +  "/docs/document/create?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"publishDocument" : this.RESSOURCE +  "/docs/document/publier-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"publishedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-publier?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"shareDocument" : this.RESSOURCE +  "/docs/document/partage-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"shareDocumentWith" : this.RESSOURCE +  "/docs/document/partager-with-teacher?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"sharedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-partager?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"viewDocument" : this.RESSOURCE +  "/docs/document/view?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"addDocumentToLikeList" : this.RESSOURCE +  "/user/add-follow-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"downloadDocument": this.RESSOURCE +  "/docs/document/DownLoad?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				// competences

				"getCompetences" : this.RESSOURCE +  "/user/competences-teacher?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteCompetences" : this.RESSOURCE +  "/user/delete-competence?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"addCompetences" : this.RESSOURCE +  "/user/add-competence?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				// teacher 
				
				"getTeachersWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-teacher-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getTeachersWhoAddOtherteacherDocumentToLikeList" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudentsWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-student-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getDocumentShareWithTeachers" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getCompetentTeachersInOneDiscipline" : this.RESSOURCE +  "/user/collaborator-competent-in?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"addDocumentCorrection" : this.RESSOURCE +  "",
				"getDocumentCorrectionsList" : this.RESSOURCE +  "",
				"AddCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/create?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"updateCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/update?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/delete?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getCommentsOnDocument" : this.RESSOURCE +  "/docs/document/comments-document?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				
				// profile

				"getProfile" : this.RESSOURCE +  "/user/profile?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"setProfile" : this.RESSOURCE +  "/user/update-profile?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"setLogo" : this.RESSOURCE +  "/user/change-my-logo?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"setPassword" : this.RESSOURCE +  "/user/update-password?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"setUsername" : this.RESSOURCE +  "/user/update-username?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				
				// publications

				"indexPublications" : this.RESSOURCE +  "/publierenseignant/index?access-token=" + this.AccessToken + "&session_id=" + this.sessionId, 
				"getPublications" : this.RESSOURCE +  "/publierenseignant/home?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"updatePublication" : this.RESSOURCE +  "/publierenseignant/update-pub?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deletePublication" : this.RESSOURCE +  "/publierenseignant/delete-article?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"addPublication" : this.RESSOURCE +  "/publierenseignant/create-article?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				// collaborations
				
				"askCollaboration" : this.RESSOURCE +  "/user/send-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"acceptCollaboration" : this.RESSOURCE +  "/user/accepte-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"refuseCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getCollaboratorsActifCollaborations" : this.RESSOURCE +  "/user/my-collaborators?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getCollaboratorsCollaborations" : this.RESSOURCE +  "/user/collaborator-of-my-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"isMyCollaborator" : this.RESSOURCE +  "/user/if-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"hadSendUnansweredCollaborationRequest" : this.RESSOURCE +  "/user/if-attente-collaborator?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getCollaboratorsWaitingCollaborations" : this.RESSOURCE +  "/user/attente-send-collaborators?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				
				// notifications

				"getNotifications" : this.RESSOURCE +  "/user/my-notification?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"readNotifications" : this.RESSOURCE +  "/user/read-notification?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				// citations

				"getCitations" : this.RESSOURCE +  "/citation/citation/index?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"createCitation" : this.RESSOURCE +  "/citation/citation/create?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"updateCitation" : this.RESSOURCE +  "/citation/citation/update?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteCitation" : this.RESSOURCE +  "/citation/citation/delete?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"otherTeacherCitations" : this.RESSOURCE +  "user/my-citations?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

				// figures 

				"getFigures" : this.RESSOURCE +  "/figure/figure/index?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getFigureDiscipline" : this.RESSOURCE +  "/figure/figure/view-discipline?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"createFigure" : this.RESSOURCE +  "/figure/figure/create?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"updateFigure" : this.RESSOURCE +  "/figure/figure/update?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteFigure" : this.RESSOURCE +  "/figure/figure/delete?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"addFigureDiscipline" : this.RESSOURCE +  "/figure/figure/add-discipline?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteFigureDiscipline" : this.RESSOURCE +  "/figure/figure/delete-discipline?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				
				// formules

				"getFormules" : this.RESSOURCE +  "/formule/formule/index?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"createFormule" : this.RESSOURCE +  "/formule/formule/create?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"updateFormule" : this.RESSOURCE +  "/formule/formule/update?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteFormule" : this.RESSOURCE +  "/formule/formule/delete?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

			},
			
			// search service

			"search" : {
				"search" : this.RESSOURCE +  "/user/search?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getLastSearch" : this.RESSOURCE +  "/user/my-last-search?"
			},

			// student room service

			"eleves" : {
				"getFollowStudents" : this.RESSOURCE +  "/user/follow-student-teacher?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudent" : this.RESSOURCE +  "/student/eleve/profile?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudentSchools" : this.RESSOURCE +  "/student/eleve/schools?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudentFollowedDocuments" : this.RESSOURCE +  "/student/eleve/documents-list?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getClubs" : this.RESSOURCE +  "/student/eleve/my-clubs?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getWorkSessions" : this.RESSOURCE +  "/student/eleve/groupes?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudentFollowedTeachers" : this.RESSOURCE +  "/student/eleve/teachers-follow?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getStudentsIndexPosts" : this.RESSOURCE +  "/student/eleve/data-index?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
		
			},

			// schools room services

			"schools" : {
				
				//levels and branch

				"getSchoolLevels" : this.RESSOURCE +  "/user/levels?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSchoolBranchs" : this.RESSOURCE +  "/user/branchs?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"getSchoolExams" : this.RESSOURCE +  "/user/examens?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				
				// schools 
				
				"addSchool" : this.RESSOURCE +  "/user/add-school?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"deleteSchool" : this.RESSOURCE +  "/user/delete-my-scool?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"leaveSchool" : this.RESSOURCE +  "/user/leave-my-scool?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"myTeachingSchools" : this.RESSOURCE +  "/user/my-schools?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolProfile" : this.RESSOURCE +  "/school/etablissement/profile?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolPosts" : this.RESSOURCE +  "/school/etablissement/articles?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolTeachers" : this.RESSOURCE +  "/school/etablissement/teachers?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolLevels" : this.RESSOURCE +  "/school/etablissement/niveaux?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolBranchs" : this.RESSOURCE +  "/school/etablissement/specialites?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolStudents" : this.RESSOURCE +  "/school/etablissement/students?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolTD" : this.RESSOURCE +  "/school/etablissement/td?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolLeccons" : this.RESSOURCE +  "/school/etablissement/cours?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,
				"schoolExams" : this.RESSOURCE +  "/school/etablissement/epreuve?access-token=" + this.AccessToken + "&session_id=" + this.sessionId,

			}


		}
  }

 /********************************* services generator / services factory ***************************************************************************/

  generateFunctions(){
  	var that = this;
  	for (let data in this.teacher) {
  		let modules = this.teacher[data];
  		for (let links in modules) {
  			let link = modules[links];

  			/*
  			* @params data Object the post data
  			* @params fn Function the callback function
  			* @params urlParams String the url add parameters
  			*/

  			this.functions[links] = function (data, urlParams) {
  				return new Promise(function (resolve, reject) {
  					
	  				let linke = "";
	  				linke = (urlParams == undefined) ? link  : link + urlParams;

  					that.request.post(linke, data).subscribe(function(result){
	  					resolve(result);
	  				})	
  				});
  				
  			}
  		}
  	}
  }

 /******************************* Statut receiver ***********************************************************/

 dataReceiver(data){
 	if (data.status == this.status.error) {
 		// here we send a toast
 		return  false;
 	}else{
 		if (data.hasOwnProperty("url")) {
 			return {
 				data : data.data,
 				url : data.url
 			}
 		}else{
 			return data.data;
 		}
 	}
 }


}
