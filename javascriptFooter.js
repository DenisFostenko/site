var panelsT = document.getElementsByClassName("work_section_zero-Click");
var panelsL = document.getElementsByClassName("work_section_zero-Click-clack");
var activesT = document.getElementsByClassName('active_footer');
for (i = 0; panelsL.length > i; i++) {
  panelsT[i].onclick = function() {
    var currentActive = activesT[0];
    if (currentActive)
      currentActive.classList.remove("active_footer");

    if (currentActive !== this)
      this.classList.add("active_footer");
  };
}