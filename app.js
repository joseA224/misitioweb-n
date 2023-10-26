const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      parent: 0,
      id: 1,
      content:
        "¡Impresionante! Aunque parece que la función de arrastre podría mejorarse. Pero en general parece increíble. Has logrado el diseño y la capacidad de respuesta en varios puntos de interrupción funciona muy bien.",
      createdAt: "Hace 1 mes",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      parent: 0,
      id: 2,
      content:
        "¡Guau, tu proyecto se ve increíble! ¿Cuánto tiempo llevas codificando? Todavía soy nuevo, pero creo que también quiero sumergirme en React pronto. ¿Quizás puedas darme una idea de dónde puedo aprender React? ¡Gracias!",
      createdAt: "hace 2 semanas",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          parent: 2,
          id: 1,
          content:
            "Si aún eres nuevo, te recomiendo que te centres en los fundamentos de HTML, CSS y JS antes de considerar React. Es muy tentador dar un paso adelante, pero primero hay que sentar una base sólida..",
          createdAt: "Hace 1 semana",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          parent: 2,
          id: 1,
          content:
            "No podría estar más de acuerdo con esto. Todo avanza muy rápido y siempre parece que todos conocen la biblioteca/marco más nuevo. Pero los fundamentos son los que se mantienen constantes.",
          createdAt: "hace 2 días",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};
function appendFrag(frag, parent) {
  var children = [].slice.call(frag.childNodes, 0);
  parent.appendChild(frag);
  //console.log(children);
  return children[1];
}

const addComment = (body, parentId, replyTo = undefined) => {
  let commentParent =
    parentId === 0
      ? data.comments
      : data.comments.filter((c) => c.id == parentId)[0].replies;
  let newComment = {
    parent: parentId,
    id:
      commentParent.length == 0
        ? 1
        : commentParent[commentParent.length - 1].id + 1,
    content: body,
    createdAt: "Now",
    replyingTo: replyTo,
    score: 0,
    replies: parent == 0 ? [] : undefined,
    user: data.currentUser,
  };
  commentParent.push(newComment);
  initComments();
};
const deleteComment = (commentObject) => {
  if (commentObject.parent == 0) {
    data.comments = data.comments.filter((e) => e != commentObject);
  } else {
    data.comments.filter((e) => e.id === commentObject.parent)[0].replies =
      data.comments
        .filter((e) => e.id === commentObject.parent)[0]
        .replies.filter((e) => e != commentObject);
  }
  initComments();
};

const promptDel = (commentObject) => {
  const modalWrp = document.querySelector(".modal-wrp");
  modalWrp.classList.remove("invisible");
  modalWrp.querySelector(".yes").addEventListener("click", () => {
    deleteComment(commentObject);
    modalWrp.classList.add("invisible");
  });
  modalWrp.querySelector(".no").addEventListener("click", () => {
    modalWrp.classList.add("invisible");
  });
};

const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
  if (parent.querySelectorAll(".reply-input")) {
    parent.querySelectorAll(".reply-input").forEach((e) => {
      e.remove();
    });
  }
  const inputTemplate = document.querySelector(".reply-input-template");
  const inputNode = inputTemplate.content.cloneNode(true);
  const addedInput = appendFrag(inputNode, parent);
  addedInput.querySelector(".bu-primary").addEventListener("click", () => {
    let commentBody = addedInput.querySelector(".cmnt-input").value;
    if (commentBody.length == 0) return;
    addComment(commentBody, parentId, replyTo);
  });
};

const createCommentNode = (commentObject) => {
  const commentTemplate = document.querySelector(".comment-template");
  var commentNode = commentTemplate.content.cloneNode(true);
  commentNode.querySelector(".usr-name").textContent =
    commentObject.user.username;
  commentNode.querySelector(".usr-img").src = commentObject.user.image.webp;
  commentNode.querySelector(".score-number").textContent = commentObject.score;
  commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt;
  commentNode.querySelector(".c-body").textContent = commentObject.content;
  if (commentObject.replyingTo)
    commentNode.querySelector(".reply-to").textContent =
      "@" + commentObject.replyingTo;

  commentNode.querySelector(".score-plus").addEventListener("click", () => {
    commentObject.score++;
    initComments();
  });

  commentNode.querySelector(".score-minus").addEventListener("click", () => {
    commentObject.score--;
    if (commentObject.score < 0) commentObject.score = 0;
    initComments();
  });
  if (commentObject.user.username == data.currentUser.username) {
    commentNode.querySelector(".comment").classList.add("this-user");
    commentNode.querySelector(".delete").addEventListener("click", () => {
      promptDel(commentObject);
    });
    commentNode.querySelector(".edit").addEventListener("click", () => {
      const path = commentNode.querySelector(".c-body");
      if (!path.isContentEditable) {
        path.contentEditable = true;
        path.focus();
      } else {
        path.contentEditable = false;
        // Guarda el comentario editado
        commentObject.content = path.textContent;
      }
    });
    
    return commentNode;
  }
  return commentNode;
};

const appendComment = (parentNode, commentNode, parentId) => {
  const bu_reply = commentNode.querySelector(".reply");
  // parentNode.appendChild(commentNode);
  const appendedCmnt = appendFrag(commentNode, parentNode);
  const replyTo = appendedCmnt.querySelector(".usr-name").textContent;
  bu_reply.addEventListener("click", () => {
    if (parentNode.classList.contains("replies")) {
      spawnReplyInput(parentNode, parentId, replyTo);
    } else {
      //console.log(appendedCmnt.querySelector(".replies"));
      spawnReplyInput(
        appendedCmnt.querySelector(".replies"),
        parentId,
        replyTo
      );
    }
  });
};

function initComments(
  commentList = data.comments,
  parent = document.querySelector(".comments-wrp")
) {
  parent.innerHTML = "";
  commentList.forEach((element) => {
    var parentId = element.parent == 0 ? element.id : element.parent;
    const comment_node = createCommentNode(element);
    if (element.replies && element.replies.length > 0) {
      initComments(element.replies, comment_node.querySelector(".replies"));
    }
    appendComment(parent, comment_node, parentId);
  });
}

initComments();
const cmntInput = document.querySelector(".reply-input");
cmntInput.querySelector(".bu-primary").addEventListener("click", () => {
  let commentBody = cmntInput.querySelector(".cmnt-input").value;
  if (commentBody.length == 0) return;
  addComment(commentBody, 0);
  cmntInput.querySelector(".cmnt-input").value = "";
});


// addComment("Hello ! It works !!",0);
