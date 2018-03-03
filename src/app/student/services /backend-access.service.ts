import { Injectable } from '@angular/core';
import { RequestService } from './../../shared/services/request.service';
@Injectable()
export class BackendAccessService {

	// url for the back end ressources 

	public RESSOURCE = "http://vy-cam-men-spider1025scha.mendolearn.com/backend/web/index.php";
	
	public school = {}

	public student = {}

	routes = {
		school : this.school,
		student : this.student
	}

  constructor(private AccessToken, private request : RequestService) {
  	this.init();
  	this.generateFunctions();
  }

  init(){
	  	this.school = {
	  		"etablissement" : {
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
				"schoolProgressionTD" : this.RESSOURCE +  "/school/etablissement/fiche-prog?access-token=" + this.AccessToken,
				"schoolPedagogiqueTD" : this.RESSOURCE +  "/school/etablissement/fiche-peda?access-token=" + this.AccessToken,
			},

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
			"enseignant" : {
				"askCollaboration" : this.RESSOURCE +  "/user/send-collaborator?access-token=" + this.AccessToken,
				"acceptCollaboration" : this.RESSOURCE +  "/user/accepte-collaborator?access-token=" + this.AccessToken,
				"refuseCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"deleteCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsActifCollaborations" : this.RESSOURCE +  "/user/my-collaborators?access-token=" + this.AccessToken,
				"getCollaboratorsCollaborations" : this.RESSOURCE +  "/user/collaborator-of-my-collaborator?access-token=" + this.AccessToken,
				"isMyCollaborator" : this.RESSOURCE +  "/user/if-collaborator?access-token=" + this.AccessToken,
				"addSendUnansweredCollaborationRequest" : this.RESSOURCE +  "/user/if-attente-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsWaitingCollaborations" : this.RESSOURCE +  "/user/attente-send-collaborators?access-token=" + this.AccessToken,

				"getCompetences" : this.RESSOURCE +  "/user/competences-teacher?access-token=" + this.AccessToken,
				"deleteCompetences" : this.RESSOURCE +  "/user/delete-competence?access-token=" + this.AccessToken,
				"addCompetences" : this.RESSOURCE +  "/user/add-competence?access-token=" + this.AccessToken,

				"AddDocument" : this.RESSOURCE +  "/docs/document/create?access-token=" + this.AccessToken,
				"publishDocument" : this.RESSOURCE +  "/docs/document/publier-document?access-token=" + this.AccessToken,
				"publishedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-publier?access-token=" + this.AccessToken,
				"shareDocument" : this.RESSOURCE +  "/docs/document/partage-document?access-token=" + this.AccessToken,
				"shareDocumentWith" : this.RESSOURCE +  "/docs/document/partager-with-teacher?access-token=" + this.AccessToken,
				"sharedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-partager?access-token=" + this.AccessToken,
				"addDocumentToLikeList" : this.RESSOURCE +  "/user/add-follow-document?access-token=" + this.AccessToken,
				"getTeachersWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-teacher-document?access-token=" + this.AccessToken,
				"getTeachersWhoAddOtherteacherDocumentToLikeList" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getStudentsWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-student-document?access-token=" + this.AccessToken,
				"getDocumentShareWithTeachers" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getCompetentTeachersInDocumentDiscipline" : this.RESSOURCE +  "/user/collaborator-competent-in?access-token=" + this.AccessToken,
				"addDocumentCorrection" : this.RESSOURCE +  "",
				"getDocumentCorrectionsList" : this.RESSOURCE +  "",
				"AddCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/create?access-token=" + this.AccessToken,
				"updateCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/update?access-token=" + this.AccessToken,
				"deleteCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/delete?access-token=" + this.AccessToken,
				"getCommentsOnDocument" : this.RESSOURCE +  "/docs/document/comments-document?access-token=" + this.AccessToken,

				"getProfile" : this.RESSOURCE +  "/user/profile?access-token=" + this.AccessToken,
				"setProfile" : this.RESSOURCE +  "/user/update-profile?access-token=" + this.AccessToken,
				"setLogo" : this.RESSOURCE +  "/user/change-my-logo?access-token=" + this.AccessToken,
				"setPassword" : this.RESSOURCE +  "/user/update-password?access-token=" + this.AccessToken,

				"getPublications" : this.RESSOURCE +  "/user/my-articles?access-token=" + this.AccessToken,
				"updatePublication" : this.RESSOURCE +  "/publierenseignant/update-pub?access-token=" + this.AccessToken,
				"deletePublication" : this.RESSOURCE +  "/publierenseignant/delete-article?access-token=" + this.AccessToken,
				"addPublication" : this.RESSOURCE +  "/publierenseignant/create-article?access-token=" + this.AccessToken,

			},
			"search" : {
				"search" : this.RESSOURCE +  "/user/search?access-token=" + this.AccessToken,
				"getLastSearch" : this.RESSOURCE +  "/user/my-last-search?"
			}


		}


		// to see after

		this.student = {
	  		"etablissement" : {
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
				"schoolProgressionTD" : this.RESSOURCE +  "/school/etablissement/fiche-prog?access-token=" + this.AccessToken,
				"schoolPedagogiqueTD" : this.RESSOURCE +  "/school/etablissement/fiche-peda?access-token=" + this.AccessToken,
			},

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
			"enseignant" : {
				"askCollaboration" : this.RESSOURCE +  "/user/send-collaborator?access-token=" + this.AccessToken,
				"acceptCollaboration" : this.RESSOURCE +  "/user/accepte-collaborator?access-token=" + this.AccessToken,
				"refuseCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"deleteCollaboration" : this.RESSOURCE +  "/user/refuse-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsActifCollaborations" : this.RESSOURCE +  "/user/my-collaborators?access-token=" + this.AccessToken,
				"getCollaboratorsCollaborations" : this.RESSOURCE +  "/user/collaborator-of-my-collaborator?access-token=" + this.AccessToken,
				"isMyCollaborator" : this.RESSOURCE +  "/user/if-collaborator?access-token=" + this.AccessToken,
				"addSendUnansweredCollaborationRequest" : this.RESSOURCE +  "/user/if-attente-collaborator?access-token=" + this.AccessToken,
				"getCollaboratorsWaitingCollaborations" : this.RESSOURCE +  "/user/attente-send-collaborators?access-token=" + this.AccessToken,

				"getCompetences" : this.RESSOURCE +  "/user/competences-teacher?access-token=" + this.AccessToken,
				"deleteCompetences" : this.RESSOURCE +  "/user/delete-competence?access-token=" + this.AccessToken,
				"addCompetences" : this.RESSOURCE +  "/user/add-competence?access-token=" + this.AccessToken,

				"AddDocument" : this.RESSOURCE +  "/docs/document/create?access-token=" + this.AccessToken,
				"publishDocument" : this.RESSOURCE +  "/docs/document/publier-document?access-token=" + this.AccessToken,
				"publishedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-publier?access-token=" + this.AccessToken,
				"shareDocument" : this.RESSOURCE +  "/docs/document/partage-document?access-token=" + this.AccessToken,
				"shareDocumentWith" : this.RESSOURCE +  "/docs/document/partager-with-teacher?access-token=" + this.AccessToken,
				"sharedDocument" : this.RESSOURCE +  "/docs/document/documents-teacher-partager?access-token=" + this.AccessToken,
				"addDocumentToLikeList" : this.RESSOURCE +  "/user/add-follow-document?access-token=" + this.AccessToken,
				"getTeachersWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-teacher-document?access-token=" + this.AccessToken,
				"getTeachersWhoAddOtherteacherDocumentToLikeList" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getStudentsWhoAddDocumentToLikeList" : this.RESSOURCE +  "/docs/document/follow-student-document?access-token=" + this.AccessToken,
				"getDocumentShareWithTeachers" : this.RESSOURCE +  "/docs/document/collaborateurs-partage-document?access-token=" + this.AccessToken,
				"getCompetentTeachersInDocumentDiscipline" : this.RESSOURCE +  "/user/collaborator-competent-in?access-token=" + this.AccessToken,
				"addDocumentCorrection" : this.RESSOURCE +  "",
				"getDocumentCorrectionsList" : this.RESSOURCE +  "",
				"AddCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/create?access-token=" + this.AccessToken,
				"updateCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/update?access-token=" + this.AccessToken,
				"deleteCommentOnDocument" : this.RESSOURCE +  "/docs/commentdocument/delete?access-token=" + this.AccessToken,
				"getCommentsOnDocument" : this.RESSOURCE +  "/docs/document/comments-document?access-token=" + this.AccessToken,

				"getProfile" : this.RESSOURCE +  "/user/profile?access-token=" + this.AccessToken,
				"setProfile" : this.RESSOURCE +  "/user/update-profile?access-token=" + this.AccessToken,
				"setLogo" : this.RESSOURCE +  "/user/change-my-logo?access-token=" + this.AccessToken,
				"setPassword" : this.RESSOURCE +  "/user/update-password?access-token=" + this.AccessToken,

				"getPublications" : this.RESSOURCE +  "/user/my-articles?access-token=" + this.AccessToken,
				"updatePublication" : this.RESSOURCE +  "/publierenseignant/update-pub?access-token=" + this.AccessToken,
				"deletePublication" : this.RESSOURCE +  "/publierenseignant/delete-article?access-token=" + this.AccessToken,
				"addPublication" : this.RESSOURCE +  "/publierenseignant/create-article?access-token=" + this.AccessToken,

			},
			"search" : {
				"search" : this.RESSOURCE +  "/user/search?access-token=" + this.AccessToken,
				"getLastSearch" : this.RESSOURCE +  "/user/my-last-search?"
			}
		}
  }

  generateFunctions(){
  	var that = this;
  	for (var data in this.school) {
  		var modules = this.school[data];
  		for (var links in modules) {
  			var link = modules[link];
  			this[links] = function (data, fn) {
  				that.request.post(link, data).subscribe(function(result){
  					fn(result);
  				})
  			}
  		}
  	}
  }


}
