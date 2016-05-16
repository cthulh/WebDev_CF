def block(character, rows, width, header, border_top, border_bottom, space_before)

	if rows<3 || width<3 || !character || !header
		2.times {puts}
		puts "Please enter correct parameters!"
		2.times {puts}
		exit
	end

	if rows%2==2 then rows+=1 end

	def insert_line(border, line_length, text)
		
		if !text 
			print "\n#{border}"
			(line_length-2).times {print ' '}
			print "#{border}"
		else
			print "\n#{border}"
			print "#{text}".center(line_length-2)
			print "#{border}"
		end
	end

	def borderline(border, line_length, position)
		if position=='top'
			print "\n"
			line_length.times {print "#{border}"}
		elsif position=='bottom'
			print "\n"
			line_length.times {print "#{border}"}
			print "\n"
		end

	end

	if space_before=='yes' then 3.times {puts} end
	if border_top=='yes' then borderline(character,width, 'top') end
	((rows-1)/2).times {insert_line(character,width, nil)}
	insert_line(character,width,header)
	((rows-1)/2).times {insert_line(character,width, nil)}
	if border_bottom=='yes' then borderline(character,width, 'bottom') end

end

class Play
	def initialize
		@player_points = 0
		@computer_points = 0
	end

	def r_p_s(player_choice, computer_choice)

		if player_choice.length > 1
			puts "Error: Incorrect choice" 
			exit
		end 

		game_options = {'r' => 'Rock', 'p' => 'Paper', 's' => 'Scissors'}

		case [player_choice,computer_choice]

			when ['r','p'], ['s','r'],['p','s']
				puts "Computer wins!"
				@computer_points = @computer_points + 1
				puts "You: #{game_options[player_choice]}"
				puts "Computer: #{game_options[computer_choice]}"
				puts "Results:\nPlayer: #{@player_points} | Computer: #{@computer_points}"
			when ['r','s'],['p','r'],['s','p']
				puts "You win!"
				@player_points = @player_points + 1
				puts "You: #{game_options[player_choice]}"
				puts "Computer: #{game_options[computer_choice]}"
				puts "Results:\nPlayer: #{@player_points} | Computer: #{@computer_points}"
			else
				puts "Tie! No points granted."
				puts "You have both chosen #{game_options[player_choice]}"
				puts "Results:\nPlayer: #{@player_points} | Computer: #{@computer_points}"
		end
	end

	def kick_off
		3.times {puts}
		print "Enter your choice: "
		option = gets.chomp.downcase
		r_p_s(option,'rsp'[rand(3)])

		while true do
		3.times {puts}
		puts "Another round? \nEnter [Y] for yes, [N] for no"
		one_more = gets.chomp.downcase
			if one_more=='n'
				exit
			elsif one_more=='y'
				kick_off
			end
		end
	end
end

block("#",10,80,"Welcome to Rock Paper Scissor game!",'yes','yes','yes')
block("#",3,80,"Rules",'yes',nil,nil)
block("#",3,80,"1. Enter one of the following options:",nil,nil,nil)
block("#",3,80,"[R] for rock, [P] for paper, [S] for scissors",nil,nil,nil)
block("#",3,80,"2. Computers option will be chosen randomly ",nil,nil,nil)
block("#",3,80,"3. You will se the result on the screen immidiately ", nil, 'yes', nil) 

Play.new.kick_off

	



