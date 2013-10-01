;;;; b-testbed.asd

(asdf:defsystem #:b-testbed
  :serial t
  :description "Describe b-testbed here"
  :author "Your Name <your.name@example.com>"
  :license "Specify license here"
  :depends-on (#:drakma
               #:hunchentoot
               #:cl-who
               #:inferior-shell
	       #:cl-ppcre)
  :components ((:file "package")
               (:file "b-testbed")))

