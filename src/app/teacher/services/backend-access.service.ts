import { Injectable } from '@angular/core';
import { RequestService } from './../../shared/services/request.service';
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

	private AccessToken = "ZR32UPxRNYLAi3q0BqeY_Bp2Z3NpcezV";

 /********************************* Back end access services for teacher ***************************************************************************/

  constructor(private request : RequestService) {
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

				"getSharedLeccons" : this.RESSOURCE +  "/user/cours-partager?access-token=" + this.AccessToken,
				"getSharedPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-partager?access-token=" + this.AccessToken,
				"getSharedTD" : this.RESSOURCE +  "/user/td-partager?access-token=" + this.AccessToken,
				"getSharedExams" : this.RESSOURCE +  "/user/epreuve-partager?access-token=" + this.AccessToken,
				"getSharedProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-partager?access-token=" + this.AccessToken,

				"getDisabledLeccons" : this.RESSOURCE +  "/user/cours-desactiver?access-token=" + this.AccessToken,
				"getDisabledPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-desactiver?access-token=" + this.AccessToken,
				"getDisabledTD" : this.RESSOURCE +  "/user/td-desactiver?access-token=" + this.AccessToken,
				"getDisabledExams" : this.RESSOURCE +  "/user/epreuve-desactiver?access-token=" + this.AccessToken,
				"getDisabledProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-desactiver?access-token=" + this.AccessToken,

				"getPublishedLeccons" : this.RESSOURCE +  "/user/cours-publier?access-token=" + this.AccessToken,
				"getPublishedPedagogiqueTD" : this.RESSOURCE +  "/user/fiche-peda-publier?access-token=" + this.AccessToken,
				"getPublishedTD" : this.RESSOURCE +  "/user/td-publier?access-token=" + this.AccessToken,
				"getPublishedExams" : this.RESSOURCE +  "/user/epreuve-publier?access-token=" + this.AccessToken,
				"getPublishedProgressionTD" : this.RESSOURCE +  "/user/fiche-prog-publier?access-token=" + this.AccessToken,
				"AddDocument" : this.RESSOURCE +  "/docs/document/create?access-token=" + this.AccessToken,
				"publishDocument" : this.RESSOURCE +  "/docs/document/publier-document?access-token=" + this.AccessToken,
				"publishedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-publier?access-token=" + this.AccessToken,
				"shareDocument" : this.RESSOURCE +  "/docs/document/partage-document?access-token=" + this.AccessToken,
				"shareDocumentWith" : this.RESSOURCE +  "/docs/document/partager-with-teacher?access-token=" + this.AccessToken,
				"sharedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-partager?access-token=" + this.AccessToken,
				"viewDocument" : this.RESSOURCE +  "/docs/document/view?access-token=" + this.AccessToken,
				"addDocumentToLikeList" : this.RESSOURCE +  "/user/add-follow-document?access-token=" + this.AccessToken,
				"downloadDocument": this.RESSOURCE +  "/docs/document/DownLoad?access-token=" + this.AccessToken,

				// competences

				"getCompetences" : this.RESSOURCE +  "/user/competences-teacher?access-token=" + this.AccessToken,
				"deleteCompetences" : this.RESSOURCE +  "/user/delete-competence?access-token=" + this.AccessToken,
				"addCompetences" : this.RESSOURCE +  "/user/add-competence?access-token=" + this.AccessToken,

				// teacher 
				
				"getTeachersWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-teacher-document?access-token=" + this.AccessToken,
				"getTeachersWhoAddOtherteacherDocumentToLikeList" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getStudentsWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-student-document?access-token=" + this.AccessToken,
				"getDocumentShareWithTeachers" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getCompetentTeachersInOneDiscipline" : this.RESSOURCE +  "/user/collaborator-competent-in?access-token=" + this.AccessToken,
				"addDocumentCorrection" : this.RESSOURCE +  "",
				"getDocumentCorrectionsList" : this.RESSOURCE +  "",
				"AddCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/create?access-token=" + this.AccessToken,
				"updateCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/update?access-token=" + this.AccessToken,
				"deleteCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/delete?access-token=" + this.AccessToken,
				"getCommentsOnDocument" : this.RESSOURCE +  "/docs/document/comments-document?access-token=" + this.AccessToken,
				
				// profile

				"getProfile" : this.RESSOURCE +  "/user/profile?access-token=" + this.AccessToken,
				"setProfile" : this.RESSOURCE +  "/user/update-profile?access-token=" + this.AccessToken,
				"setLogo" : this.RESSOURCE +  "/user/change-my-logo?access-token=" + this.AccessToken,
				"setPassword" : this.RESSOURCE +  "/user/update-password?access-token=" + this.AccessToken,
				"setUsername" : this.RESSOURCE +  "/user/update-username?access-token=" + this.AccessToken,
				
				// publications

				"getPublications" : this.RESSOURCE +  "/user/my-articles?access-token=" + this.AccessToken,
				"updatePublication" : this.RESSOURCE +  "/publierenseignant/update-pub?access-token=" + this.AccessToken,
				"deletePublication" : this.RESSOURCE +  "/publierenseignant/delete-article?access-token=" + this.AccessToken,
				"addPublication" : this.RESSOURCE +  "/publierenseignant/create-article?access-token=" + this.AccessToken,

				// collaborations
				
				"askCollaboration" : this.RESSOURCE +  "/user/send-collaborator?access-token=" + this.AccessToken,
				"acceptCollaboration" : this.RESSOURCE +  "/user/accepte-collaborator?access-token=" + this.AccessToken,
				"refuseCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"deleteCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsActifCollaborations" : this.RESSOURCE +  "/user/my-collaborators?access-token=" + this.AccessToken,
				"getCollaboratorsCollaborations" : this.RESSOURCE +  "/user/collaborator-of-my-collaborator?access-token=" + this.AccessToken,
				"isMyCollaborator" : this.RESSOURCE +  "/user/if-collaborator?access-token=" + this.AccessToken,
				"hadSendUnansweredCollaborationRequest" : this.RESSOURCE +  "/user/if-attente-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsWaitingCollaborations" : this.RESSOURCE +  "/user/attente-send-collaborators?access-token=" + this.AccessToken,
				
				// notifications

				"getNotifications" : this.RESSOURCE +  "/user/my-notification?access-token=" + this.AccessToken,
				"readNotifications" : this.RESSOURCE +  "/user/read-notification?access-token=" + this.AccessToken,

				// citations

				"getCitations" : this.RESSOURCE +  "/citation/citation/index?access-token=" + this.AccessToken,
				"createCitation" : this.RESSOURCE +  "/citation/citation/create?access-token=" + this.AccessToken,
				"updateCitation" : this.RESSOURCE +  "/citation/citation/update?access-token=" + this.AccessToken,
				"deleteCitation" : this.RESSOURCE +  "/citation/citation/delete?access-token=" + this.AccessToken,
				"otherTeacherCitations" : this.RESSOURCE +  "user/my-citations?access-token=" + this.AccessToken,

				// figures 

				"getFigures" : this.RESSOURCE +  "/figure/figure/index?access-token=" + this.AccessToken,
				"getFigureDiscipline" : this.RESSOURCE +  "/figure/figure/view-discipline?access-token=" + this.AccessToken,
				"createFigure" : this.RESSOURCE +  "/figure/figure/create?access-token=" + this.AccessToken,
				"updateFigure" : this.RESSOURCE +  "/figure/figure/update?access-token=" + this.AccessToken,
				"deleteFigure" : this.RESSOURCE +  "/figure/figure/delete?access-token=" + this.AccessToken,
				"addFigureDiscipline" : this.RESSOURCE +  "/figure/figure/add-discipline?access-token=" + this.AccessToken,
				"deleteFigureDiscipline" : this.RESSOURCE +  "/figure/figure/delete-discipline?access-token=" + this.AccessToken,
				
				// formules

				"getFormules" : this.RESSOURCE +  "/formule/formule/index?access-token=" + this.AccessToken,
				"createFormule" : this.RESSOURCE +  "/formule/formule/create?access-token=" + this.AccessToken,
				"updateFormule" : this.RESSOURCE +  "/formule/formule/update?access-token=" + this.AccessToken,
				"deleteFormule" : this.RESSOURCE +  "/formule/formule/delete?access-token=" + this.AccessToken,

			},
			
			// search service

			"search" : {
				"search" : this.RESSOURCE +  "/user/search?access-token=" + this.AccessToken,
				"getLastSearch" : this.RESSOURCE +  "/user/my-last-search?"
			},

			// student room service

			"eleves" : {
				"getFollowStudents" : this.RESSOURCE +  "/user/follow-student-teacher?access-token=" + this.AccessToken,
				"getStudent" : this.RESSOURCE +  "/student/eleve/profile?access-token=" + this.AccessToken,
				"getStudentSchools" : this.RESSOURCE +  "/student/eleve/schools?access-token=" + this.AccessToken,
				"getStudentFollowedDocuments" : this.RESSOURCE +  "/student/eleve/documents-list?access-token=" + this.AccessToken,
				"getClubs" : this.RESSOURCE +  "/student/eleve/my-clubs?access-token=" + this.AccessToken,
				"getWorkSessions" : this.RESSOURCE +  "/student/eleve/groupes?access-token=" + this.AccessToken,
				"getStudentFollowedTeachers" : this.RESSOURCE +  "/student/eleve/teachers-follow?access-token=" + this.AccessToken,
				"getStudentsIndexPosts" : this.RESSOURCE +  "/student/eleve/data-index?access-token=" + this.AccessToken,
		
			},

			// schools room services

			"schools" : {
				
				//levels and branch

				"getSchoolLevels" : this.RESSOURCE +  "/user/levels?access-token=" + this.AccessToken,
				"getSchoolBranchs" : this.RESSOURCE +  "/user/branchs?access-token=" + this.AccessToken,
				"getSchoolExams" : this.RESSOURCE +  "/user/examens?access-token=" + this.AccessToken,
				
				// schools 
				
				"addSchool" : this.RESSOURCE +  "/user/add-school?access-token=" + this.AccessToken,
				"deleteSchool" : this.RESSOURCE +  "/user/delete-my-scool?access-token=" + this.AccessToken,
				"leaveSchool" : this.RESSOURCE +  "/user/leave-my-scool?access-token=" + this.AccessToken,
				"myTeachingSchools" : this.RESSOURCE +  "/user/my-schools?access-token=" + this.AccessToken,
				"schoolProfile" : this.RESSOURCE +  "/school/etablissement/profile?access-token=" + this.AccessToken,
				"schoolPosts" : this.RESSOURCE +  "/school/etablissement/articles?access-token=" + this.AccessToken,
				"schoolTeachers" : this.RESSOURCE +  "/school/etablissement/teachers?access-token=" + this.AccessToken,
				"schoolLevels" : this.RESSOURCE +  "/school/etablissement/niveaux?access-token=" + this.AccessToken,
				"schoolBranchs" : this.RESSOURCE +  "/school/etablissement/specialites?access-token=" + this.AccessToken,
				"schoolStudents" : this.RESSOURCE +  "/school/etablissement/students?access-token=" + this.AccessToken,
				"schoolTD" : this.RESSOURCE +  "/school/etablissement/td?access-token=" + this.AccessToken,
				"schoolLeccons" : this.RESSOURCE +  "/school/etablissement/cours?access-token=" + this.AccessToken,
				"schoolExams" : this.RESSOURCE +  "/school/etablissement/epreuve?access-token=" + this.AccessToken,

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
  		
	  				link = (urlParams == undefined) ? link  : link + "?" + urlParams;

  					that.request.post(link, data).subscribe(function(result){
	  					resolve(result);
	  				})	
  				});
  				
  			}
  		}
  	}
  }


}
