# WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
#######                                                                           #
#######                                                                           #
#######                         SIMPLE GAME   vz 1.1                              #
#######                                                                           #
#######                                                                           #
#######                 By: B _-_ Love -- (C) Nov 2019                            #
#######                                                                           #
#######                                                                           #
# <><<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
# need to import python stuff
import sys    # _-_ imports the system module from the main python files on your computer
import os     # _-_ imports operating system module
import time   # _-_ imports time module to handle various operations related to time
import cmd    # _-_ imports command interpreter
import re     # _-_ Regex
import this   # _-_ imports Spam, spam, SPAM with a side of easter eggs. ... thx TIM
# make a player class
class Player:
    def __init__(self):   # initialize class
        self.name = ''    # you can enter your name in the game
        self.health = 10   # this won't be enough to fight the bad guy until you solve the riddles
        self.attack = 10  # also won't be enough to win until you solve the puzzles
        self.solve = 0  # 3 puzzles to solve
# initialize a player
myPlayer = Player()
# make a bad guy class
class Enemy:
    def __init__(self):
        self.name = 'Bad Guy'
        self.health = 50
        self.attack = 50
# initialize bad guy
bad = Enemy()
# we start with the puzzles
def solve_puzzle1():
    print("puzzle 1 here\n")
    print("lets start with an easy one\n")
    print("can you solve the following equation?\n")
    print(" just fill in the blank \n")
    print("... What does 1 + 1 = ___ ? \n")
    q1 = input("> ")
    if q1.lower() in["2", "two", "dos", "duex"]:
        myPlayer.solve += 1
        myPlayer.health += 10
        myPlayer.attack += 10
        goodjob1 = " ... correct answer ... Good Job ... \n"
        goodjob2 = " ... Now back to the game ...  \n"
        for character in goodjob1:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.07)
        for character in goodjob2:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.07)
        game_loop()
    else:
        nope = "I'm sorry .... that was not correct\n"
        for character in nope:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.05)
        # heck give em the answer it's a simple game after all
        print(" ...  next time try 2   ... \n")
        game_loop()
        #end q1
def solve_puzzle2():
    print("puzzle 2 here\n")
    print("how about another easy one ...\n")
    print(" answer yes or no ... Is learning fun? \n")
    print(" _______ ? \n")
    q2 = input("> ")
    if q2.lower() in ["yes", "y", "yep", "true", "correct"]:
        myPlayer.solve += 1
        myPlayer.health += 20
        myPlayer.attack += 20
        goodjob1 = " ... correct answer ... Good Job ... \n"
        goodjob2 = " ... Now back to the game ...  \n"
        for character in goodjob1:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.05)
        for character in goodjob2:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.05)
        game_loop()
    else:
        nope = "I'm sorry .... that was not correct\n"
        for character in nope:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.05)
        print(" ... next time try 'yes' ...\n ")
        game_loop()
        #end q2
def solve_puzzle3():
    print("puzzle 3 here\n")
    print(" .... the last puzzle .... \n")
    print("can you solve the following question ?\n")
    print("... true or false simple is better than complex  ? \n")
    q3 = input("> ")
    if q3.lower() in ["true", "t", "tru", "tre", "treu", "tro", "tr"]:
        myPlayer.solve += 1
        myPlayer.health += 160
        myPlayer.attack += 11
        bad.health += 49
        goodjob1 = " ... correct answer ... Good Job ... \n"
        goodjob2 = " ... Now back to the game ...  \n"
        for character in goodjob1:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.03)
        for character in goodjob2:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.03)
        game_loop()
    else:
        nope = "I'm sorry .... that was not correct\n"
        for character in nope:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.05)
        print("Next time try .... 'true' ....\n")
        game_loop()
        #end q3

# now the fight
def player_fight():
    print(" !!! Fight Night ... fight time ... the fight is on !!! \n")
    if myPlayer.solve < 3:
        print(" You should solve the puzzles first or this fight is going to be tough for you\n")
        lastchance = "Are you sure you wanna fight ? This is your last chance to run now and fight later .\n"
        for character in lastchance:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.03)
        print(
            " ... type run to leave or fight to proceed ... but you've been warned ! ...\n")
        lc = input("> ")
        if lc.lower() == "run":
            game_loop()
        elif lc.lower() == "fight":
            player_attack()
        else:
            print(" unknown command returning to main game loop\n")
            game_loop()
    else:
        print("let the main battle begin !!")
        player_attack()

# the battle
def player_attack():
    os.system('clear')
    bad.health -= myPlayer.attack  # you hit bad guy
    print("feel the wrath of " + myPlayer.name + " bad guy !!!\n")
    print(" ... BANG .... POW ... WHOOMPP .....  !!!\n")
    attack = " What a hit the bad guy's health is down to %i points\n" % bad.health
    for character in attack:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.03)
    if bad.health <= 0:
        fight_win()
    else:
        print(" #!#   OHH noooo the Bad Guy is taking a big swing at you !#!#!# \n")
        myPlayer.health -= bad.attack  # bad guy hits back
        hitback1 = " what a devastating shot " + myPlayer.name + " just took \n"
        hitback2 = ".. OUCH ! Your health is down to %i points now ..\n" % myPlayer.health
        for character in hitback1:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.03)
        for character in hitback2:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.03)
        if myPlayer.health <= 0:
            fight_lose()
        else:
            print("...do you want to hit back or run away " +
                  myPlayer.name + "  ? ... \n")
            print(" choose ...  fight or run  ... \n")
            after = input("> ")
            if after.lower() == "fight":
                player_attack()
            else:
                game_loop()
                #end battle function

# win fight win game
def fight_win():
    print(" !!! Congrats you won game over !!! \n")
    game_win()

# lose the fight lose the game
def fight_lose():
    loss = """ you lost the fight .... that means you lose the game 
    ... next time try to answer the questions first\n """
    for character in loss:
            sys.stdout.write(character)
            sys.stdout.flush()
            time.sleep(0.08)
    print(" Play again or exit?\n")
    print(" type .... 'play' to go again or 'quit' to exit .... \n")
    lost = input("> ")
    if lost == "play":
        myPlayer.health = 10
        myPlayer.solve = 0
        myPlayer.attack = 10
        bad.health = 50
        start_game()
    elif lost == "quit":
        sys.exit
    else:
        game_lose()
    #end of fight lose

# winner winner chicken dinner
def game_win():
    print("Congrats you won")
    endcredits1 = "thanks for playing my simple python game till the end\n"
    endcredits2 = "I hope you enjoyed it now go make one a little more  more complex\n"
    endcredits3 = "... just remember to keep it simple to start ...\n"
    endcredits4 = ".....after all for ZEN  ... SIMPLE > COMPLEX    .....\n"
    endcredits5 = "...   S  I  M  P  L  E   >   C  O  M  P  L  E  X  ...\n"
    for character in endcredits1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in endcredits2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in endcredits3:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in endcredits4:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in endcredits5:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    sys.exit

# can lose the game
def game_lose():
    if myPlayer.solve == 0:
            print("OH NOOO YOU ARE DEAD  !!\n")
            print("Sorry you lost \n" + myPlayer.name)
            quickloss = "lets play again ... try to solve the puzzles first\n"
            for character in quickloss:
                sys.stdout.write(character)
                sys.stdout.flush()
                time.sleep(0.09)
            myPlayer.health = 10
            myPlayer.solve = 0
            myPlayer.attack = 10
            bad.health = 50
            start_game()
    else:
        print("OH NOOO YOU ARE DEAD  !!\n")
        print("Sorry you lost \n" + myPlayer.name)
        print("You solved %i puzzles \n") % myPlayer.solve
        print("Would you like to ay again ?\n")
        print("Enter yes or exit .....\n")
        choice = input(">")
        yes = ["yes", "again", "restart", "play",
               "more", "y", "yeess", "yss", "ys", "yep"]
        if choice in yes:
            myPlayer.health = 10
            myPlayer.solve = 0
            myPlayer.attack = 10
            bad.health = 50
            start_game()
        else:
            byenow = "Well bye bye now " + myPlayer.name + ".... thanks for playing"
            for character in byenow:
                sys.stdout.write(character)
                sys.stdout.flush()
                time.sleep(0.22)
            sys.exit()
            # end of game lose

# check stats and make sure puzzles are adding attributes
def player_info():
    # strings can plug right in this way
    print(" Hey there " + myPlayer.name + " you know what ... \n")
    info1 = " ... you have solved %i  puzzles out of 3...\n " % (
        myPlayer.solve)  # it's a little pickier with integers
    info2 = "You have % i health currently \n" % (myPlayer.health)
    info3 = "Your attack deals % i damage points currently\n" % (
        myPlayer.attack)
    info4 = "The bad guy has %i health\n" % (bad.health)
    info5 = "If he hits you " + myPlayer.name + \
        " it will hurt %i hit points\n" % (bad.attack)
    for character in info1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in info2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in info3:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in info4:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in info5:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    game_loop()
# end of info command

# game start function
def start_game():
    # this tells system to clear the 'screen' either terminal or console
    os.system('clear')
    question0 = """ # Greetings and welcome to !: __Simple > Complex__ :! a simple 'game' coded in Python3 \n
                    Thank you for playing.  ### \n"""
    for character in question0:
        # this tells it to type each character in question 0
        sys.stdout.write(character)
        # one by one the characters appear .... makes it more like a game ... like a conversation....
        sys.stdout.flush()
        # a number closer to 1 (higher) is slower - a lower number is faster
        time.sleep(0.013)
    # what's in a name
    question1 = " Hello stranger ... I'm the narrator for this game ...\n... My Name is Brian. What's your name? ... \n ... Please enter it below. ...\n"
    for character in question1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.04)  # little lower little faster
# the below code is courtsey of a kind stranger on Stack Overflow
#  Many Many thanks to Saraswatendra Singh for answering my question when I was struggling to solve this
#    problem of the name entered to be blank or spaces...
# https://stackoverflow.com/questions/58795383/how-do-you-prevent-an-empty-string-from-being-entered-via-user-input-in-python3
    regex = r'(.*?)\w(.*?)'
    player_name = input("==> ")  # where you enter your name for the game
    while (True):
        if player_name != 'None' and (re.match(regex, player_name)):
            myPlayer.name = player_name
            break
        else:
            print("#! HEY ____ YOU GOT A NAME RIGHT ? TYPE IT IN ... !#")
            player_name = input("==> ")
    # next we can assign the name you typed in input to the character above
    question2 = "Hello, " + myPlayer.name + " welcome to the game .... \n"
    for character in question2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.08)  # lower is faster
    # we can stack the questions and the functions to print them
    intro1 = " . your health is  %i points .\n " % (myPlayer.health)
    intro2 = " .. your attacks deal out %i  hit points ..\n " % (
        myPlayer.attack)
    intro3 = " ... you have solved %i  puzzles out of 3...\n " % (
        myPlayer.solve)
    intro4 = " ......ARE you ready to play ? \n"
    intro5 = " ... " + myPlayer.name + " ???? \n"
    intro6 = " ... the bad guy has %i health points and will hit you with %i attack points.. \n" % (
        bad.health, bad.attack)
    intro7 = " ########################################################################## "
    for character in intro1:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.06)
    for character in intro2:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.05)
    for character in intro3:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.04)
    for character in intro4:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.03)
    for character in intro5:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    for character in intro6:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    for character in intro7:
        sys.stdout.write(character)
        sys.stdout.flush()
        time.sleep(0.02)
    os.system('clear')
    print("$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#")
    print("#$#                                                     #$#")
    print("#$#                  LETS BEGIN !!                      #$#")
    print("#$#               THE GAME STARTS NOW                   #$#")
    print("#$#                                                     #$#")
    print("#$#   please make your window at least wide enough      #$#")
    print("#$#                 to see this menu                    #$#")
    print("#$#       and tall enough to see this one               #$#")
    print("#$#                 and the one below it                #$#")
    print("#$#                                                     #$#")
    print("$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#")
    game_loop()
### end of introduction menu

#  game loop = prompt interation menu
def game_loop():
    print("_-_-_-_-_........#################.........._-_-_-_-_-_-_-_")
    print("+                                                         +")
    print("+         what would you like to do ?                     +")
    print("+             options include :                           +")
    print("+    1) info  2) puzzle  3) fight  or  4) quit            +")
    print("+                                                         +")
    print("+                                                         +")
    print("+  'info' or 1 to know how many puzzles are complete      +")
    print("+  and your health and attack and the bad guy's status    +")
    print("+                                                         +")
    print("+      2 or   'puzzle'   will open the puzzles menu       +")
    print("+                                                         +")
    print("+                                                         +")
    print("+   3 or 'fight'  works best after trying the puzzles     +")
    print("+                                                         +")
    # b/c the backslash \ doesn't render need to skip this one character out to still align
    print("+  don't type the 'quotes' \" or ' just the word           +")
    print("+                                                         +")
    print("+    or type 'quit', exit or stop or 4 to end game        +")
    print("+                                                         +")
    print("_-_-_-_-_........#################.........._-_-_-_-_-_-_-_")
    action = input(">")
    acceptable_actions = ["solved", "solve", "puzzle", "riddle", "question",
                          "fight", "info",
                          "quit", "exit", "stop", "esc", "leave", "1", "2", "3", "4"]
    while action.lower() not in acceptable_actions:
        print("unknown action typed, try again.\n")
        action = input(">")
    if action.lower() in ["4", "quit", "exit", "stop", "esc", "leave"]:
        sys.exit()
    elif action.lower() in ["2", "solve", "puzzle", "riddle", "question"]:
        if myPlayer.solve == 0:
            solve_puzzle1()
        elif myPlayer.solve == 1:
            solve_puzzle2()
        elif myPlayer.solve == 2:
            solve_puzzle3()
        else:
            print(" .... there are no more puzzles .... \n")
            print(" ... guess it is time for the fight ! ...\n")
            game_loop()
    elif action.lower() in ["1", "info"]:
        player_info()
    elif action.lower() in ["fight", "3"]:
        player_fight()
    else:
        print("unknown action typed, try again.\n")
        action = input(">")
## end of main game menu
#######   END OF SIMPLE GAME LOGIC
start_game()